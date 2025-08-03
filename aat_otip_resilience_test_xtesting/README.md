## Description

This Ansible playboook is used to delete a pod in a kubernetes cluster based on a given filter.
It pick up a random pod among the found one and delete It.

## Prerequisite

-  An access to the Kubernetes cluster.
-  Ansible installed in the control node.
-  Kubectl installed in the master node.

## Variables

The following variables must be set :

| Variable     | Description                                     | Valeur par défaut |
| ------------ | ----------------------------------------------- | ----------------- |
| `ACTION`  |  Action to do in the kubernetes cluster   | "" (must be set)  |
| `POD_FILTER` |  Filter to identify the pod to delete | "" (must be set)  |

## Operation of the playbook

1.  Check if the variable `pod_filter` is defined.
2.  Get the list of the pods corresponding to the given filter in the specified namespace.
3.  Check if any pod is found.
4.  Select a random pod in the list.
5.  Delete the pod selected.
6.  Display a confirmation message.

## Usage

Execute the playboook with the folllowing command :

```sh
ansible-playbook delete_pod.yml -e "pod_filter=my-app"
```

## Template of results

 If a pod is deleted, we will have this message :

```sh
TASK [Print the result of the deletion] ****************************************
ok: [k8s_node] => {
    "msg": "Pod supprimé : my-app-pod-xyz"
}
```

 if any pod match the filter, an erro will be accured :

```sh
TASK [Ckeck if there is a matching with pods] **********************************
fatal: [k8s_node]: FAILED! => {"msg": "No pods found with the filter 'my-app' in the namespace 'my-namespace'."}
```

## Notes

-  Make sure the filter is set to avoid errors.
-  Use a specific namespace to avoid accidental deletion in a bad environment.

---
