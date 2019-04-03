from celery import Celery

#app = Celery('tasks', broker='pyamqp://guest@localhost//')

app = Celery('tasks', broker='redis://guest@localhost//')

#app = Celery('tasks', broker='redis://127.0.0.1:6379')

@app.task
def add(x, y):
    print(4)
    return x + y