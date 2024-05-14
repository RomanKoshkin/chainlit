#!/bin/bash

cd backend
export PYTHONDONTWRITEBYTECODE=1
rm -rf .chainlit
rm -rf .files
rm -rf chainlit/__pycache__
rm -rf chainlit/cli/__pycache__
rm -rf chainlit/data/__pycache__
python -m chainlit run chainlit/hello.py --port 8003 -w