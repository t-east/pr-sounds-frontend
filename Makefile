ENV_DEV_FILE := ./front/env.dev
ENV_DEV = $(shell cat $(ENV_DEV_FILE))

# Todo: Rebuild Docker Image when Dockerfile or docker-compose.deps.yml is updated
.PHONY: up
up:
	docker-compose -f docker-compose.yml up

.PHONY: down
down:
	docker-compose -f docker-compose.yml down