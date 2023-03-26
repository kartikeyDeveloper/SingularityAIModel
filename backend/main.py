from pydantic import BaseModel
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pickle
import numpy as np
import traceback

class Request(BaseModel):
    pregnancy: int | None = None
    glucose: int | None = None
    bp: int | None = None
    skin_thickness: int | None = None
    insulin: int | None = None
    bmi: float | None = None
    pedigree: float | None = None
    age: int | None = None

class Response(BaseModel):
    result: int | None = None


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["POST"],
    allow_headers=["*"],
)

@app.post("/predict")
async def predict(request: Request) -> Response:
    body = list(map(float, list(request.dict().values())))

    try:
        model = pickle.load(open('models/diabetes.pkl','rb'))
        values = np.asarray(body)
        return Response(result=model.predict(values.reshape(1, -1))[0])
    except:
        print(traceback.format_exc())