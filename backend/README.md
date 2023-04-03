# Diabetes Predictor

## About

This webapp uses FastAPI and can be deployed locally using unicorn.
The model has been trained on [this dataset](https://www.kaggle.com/uciml/pima-indians-diabetes-database) </br>

## Model Accuracy
98.25% 

## Steps to run this application in your system

1. Clone or download the [repo](https://github.com/kartikeyDeveloper/SingularityAIModel)
2. Change directory to backend and open terminal.
3. Create a virtual environment
4. RUN pip install -r requirements.txt
5. Run uvicorn main:app --reload

## Follow these steps if above don't work
1-fix windows long path not support error follow this video to fix error (https: //www.youtube.com/watch?v=tMJU1-r5csg)
2-run "pip install -r requirements.txt"
3-run "pip install uvicorn"
4-run "pip install pydantic"
5-run "pip install fastapi"
6-run "python -m uvicorn main:app --reload"to start the backend server
  
## Model update
Run notebook notebook/generate_model.ipynb
