#!/usr/bin/env bash
set -e
cd "$(dirname -- "${BASH_SOURCE[0]}")"

podman build . -t local/alkatraz
podman run -it -v.:/app --init local/alkatraz yarn install
podman run -it -p3000:3000 -v.:/app --init local/alkatraz yarn "$@"
