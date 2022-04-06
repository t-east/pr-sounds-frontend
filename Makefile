ENV_DEV_FILE := env.dev
ENV_DEV = $(shell cat $(ENV_DEV_FILE))
ENV_TEST_FILE := env.test
ENV_TEST = $(shell cat $(ENV_TEST_FILE))

# Todo: Rebuild Docker Image when Dockerfile or docker-compose.deps.yml is updated
.PHONY: up
up:
	docker-compose -f docker-compose.yml up -d

.PHONY: down
down:
	docker-compose -f docker-compose.yml down