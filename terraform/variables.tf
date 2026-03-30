variable "project_id" {
  description = "The GCP project ID"
  type        = string
  default     = "gabeperez-testing"
}

variable "region" {
  description = "The GCP region to deploy to"
  type        = string
  default     = "us-central1"
}
