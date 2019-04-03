# test. web dev

## Celery

Dejar ejecutando un servidor redis como broker

1- Dejar sirviendo app redis

celery -A "filename" worker --loglevel=info

example:

celery -A test_celery worker --loglevel=info

2- ejecutar tarea en cola de celery

ejecutar "call_celery_job.py"


