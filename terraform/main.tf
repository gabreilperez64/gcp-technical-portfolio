terraform {
  required_version = ">= 1.0"

  backend "gcs" {
    bucket  = "gabeperez-testing-tf-state"
    prefix  = "terraform/state"
  }

  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 5.0"
    }
  }
}

provider "google" {
  project = var.project_id
  region  = var.region
}

module "artifact_registry" {
  source      = "./modules/artifact_registry"
  project_id  = var.project_id
  region      = var.region
  repository_id = "portfolio-repo"
}

module "cloud_run" {
  source       = "./modules/cloud_run"
  project_id   = var.project_id
  region       = var.region
  service_name = "portfolio-site"
  image        = "us-docker.pkg.dev/cloudrun/container/hello" # Temporary placeholder image for initial provision
}

module "wif" {
  source      = "./modules/wif"
  project_id  = var.project_id
  github_repo = "gabreilperez64/gcp-technical-portfolio"
}

output "artifact_registry_url" {
  value = module.artifact_registry.repository_url
}

output "cloud_run_url" {
  value = module.cloud_run.service_url
}

output "wif_provider_name" {
  value = module.wif.workload_identity_provider_name
}

output "github_actions_sa_email" {
  value = module.wif.service_account_email
}
