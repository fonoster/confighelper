# Fonos Config Generator

> Helper to generate a fonos configuration from certificate files

![publish to docker](https://github.com/fonoster/confighelper/workflows/publish%20to%20docker%20hub/badge.svg)

This docker image helps creates a configuration using the certificate found in the `/certs` volume.

## Available Versions

You can see all images available to pull from Docker Hub via the [Tags](https://hub.docker.com/repository/registry-1.docker.io/fonoster/confighelper/tags?page=1) page. Docker tag names that begin with a "change type" word such as task, bug, or feature are available for testing and may be removed at any time.

## Installation

You can clone this repository and manually build it.

```
cd confighelper
docker build -t fonoster/confighelper:%%VERSION%% .
```

Otherwise you can pull this image from docker index.

```
docker pull fonoster/confighelper:latest:%%VERSION%%
```

## Usage Example

The following is a minimal example of using this image.

```bash
docker run -it \
  -v $(pwd)/certs:/certs \
  fonoster/confighelper
```

## Environment Variables

Run environment variables are used in the entry point script to render configuration templates. You can specify the values of these variables during `docker run`, `docker-compose up`, or in Kubernetes manifests in the `env` array.

- `ENDPOINT` - Address of API Server. Defaults to `fonos.local`

## Volumes

- `/certs` - Location of the generated certificates

## Contributing

Please read [CONTRIBUTING.md](https://github.com/fonoster/fonos/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

- [Pedro Sanders](https://github.com/psanders)

See also the list of contributors who [participated](https://github.com/fonoster/confighelper/contributors) in this project.

## License

Copyright (C) 2020 by Fonoster Inc. MIT License (see [LICENSE](https://github.com/fonoster/fonos/blob/master/LICENSE) for details).
