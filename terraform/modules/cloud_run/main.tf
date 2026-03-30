variable "project_id" {
  description = "The GCP project ID"
  type        = string
}

variable "region" {
  description = "The GCP region"
  type        = string
}

variable "service_name" {
  description = "The name of the Cloud Run service"
  type        = string
}

variable "image" {
  description = "The Docker image to deploy"
  type        = string
}

resource "google_cloud_run_service" "portfolio" {
  name     = var.service_name
  location = var.region

  template {
    spec {
      containers {
        image = var.image
        ports {
          container_port = 80
        }
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }

  lifecycle {
    ignore_changes = [
      template[0].spec[0].containers[0].image, # Let CI/CD handle image updates
    ]
  }
}

# Allow unauthenticated access (public portfolio)
resource "google_cloud_run_service_iam_member" "public_access" {
  location = google_cloud_run_service.portfolio.location
  project  = google_cloud_run_service.portfolio.project
  service  = google_cloud_run_service.portfolio.name
  role     = "roles/run.invoker"
  member   = "allUsers"
}

output "service_url" {
  value = google_cloud_run_service.portfolio.status[0].url
}
