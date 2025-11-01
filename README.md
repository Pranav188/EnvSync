# EnvSync

A zero-knowledge secret management platform with client-side encryption and a companion CLI for syncing secrets to local developer environments.

### Overview

EnvSync eliminates insecure sharing of environment variables by encrypting secrets in the browser before they leave the client. The server stores only ciphertext and metadata, never plaintext. Teams can authenticate, organize, and retrieve secrets safely while reducing onboarding and setup friction by up to 90% through centralized environment configuration.

### Key Features

- Client-side end-to-end encryption using crypto-js so the server never sees decrypted values.

- Secure REST API with JWT authentication and Mongoose models for multi-user and project-level isolation.

- React frontend for managing projects, members, and encrypted secret entries.

- Companion CLI (WIP) to pull and merge secrets into local .env files.

### Security Model

- The client derives an encryption key from a user-provided passphrase and encrypts secret values with AES via crypto-js.

- Only encrypted blobs, non-sensitive metadata, and access control data are sent to the server.

- JWTs authorize API access but do not grant decryption capability.

- Per-user and per-project isolation is enforced in the data model and verified on each request.

THIS PROJECT IS ACTIVELY BEING DEVELOPED. FEATURES, DOCUMENTATION, AND STRUCTURE ARE SUBJECT TO CHANGE AS WORK PROGRESSES.


