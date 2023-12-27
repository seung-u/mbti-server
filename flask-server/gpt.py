from openai import OpenAI

client = OpenAI(
  api_key= "",
)

def detectgenre(data):
    global response
    response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {
        "role": "system",
        "content": "해당 질문과 답 데이터를 기반으로 사용자가 가장 좋아할만한 음악 장르 1개만 말하고 다른 말을 하지 말아주세요."
        },
        {
        "role": "user",
        "content": str(data)
        }
    ],
    temperature=0,
    max_tokens=5,
    top_p=1,
    frequency_penalty=0,
    presence_penalty=0
    )
    return response.choices[0].message.content

def genrtomusic(genre):
    global response1
    response1 = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {
        "role": "system",
        "content": "입력된 장르에 맞는 인기 음악을 들을 수 있도록 유튜브 음악 링크 1개를 제공합니다. 실제로 존재하는 링크인지 확인합니다.."
        },
        {
        "role": "user",
        "content": genre
        }
    ],
    temperature=0,
    max_tokens=5,
    top_p=1,
    frequency_penalty=0,
    presence_penalty=0
    )
    return response1.choices[0].message.content
    
# print(response.choices[0].message.content)
