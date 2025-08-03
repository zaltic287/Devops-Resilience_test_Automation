FROM registry.gitlab.tech.orange/oln/nif/validation-skc/core/xtesting-drivers/opnfv-functest-xtesting

# Copy chaos Playbook,Gitlab Playbook, and `testcases.yaml` file

COPY playbook.yml playbook2.yml	k8s_chaos_role postChaosTest	/opt/xtesting/
COPY testcases.yaml 						                    /etc/xtesting/

# add some Alpine (apk) packages

USER root

RUN apk update && apk --no-cache upgrade && \ 
    apk --no-cache add ansible git openssh-client sshpass


# Setup the Python project and install the dependencies in the provided virtual environment (using the 'pyproject.toml' file)
USER xtesting
RUN /opt/xtesting/venv/bin/pip install --upgrade --no-cache-dir /opt/xtesting



