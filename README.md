AWS Cloud Projects Portfolio

This repository contains two major serverless and automation projects implemented using core AWS services (Lambda, DynamoDB, API Gateway, EventBridge, EC2/EBS).

1. Serverless Student Data Manager (CRUD)

A full-stack serverless application demonstrating Create (POST) and Read (GET) functionality.

Architecture: HTML/JS Frontend -> API Gateway -> AWS Lambda (Python) -> Amazon DynamoDB.

Key Skills Demonstrated: API Gateway routing, CORS handling, Boto3 DynamoDB integration, and front-end data consumption.

2. Automated Unused EBS Snapshot Cleanup (Project-2)

A cost-optimization solution that automatically deletes stale EBS snapshots to reduce cloud spending.

Architecture: Amazon EventBridge (Scheduler)  -> AWS Lambda (Python/Boto3) -> Amazon EC2 (EBS).

Key Skills Demonstrated: Scheduled automation, IAM least privilege access, and complex resource querying (Boto3 describe_volumes and delete_snapshot).

Logic: The script identifies snapshots whose source EBS volumes are no longer attached to any EC2 instance (i.e., the volume is detached or deleted) and deletes them based on the schedule set in EventBridge (as shown in your uploaded documentation).