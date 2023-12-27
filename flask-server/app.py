from openai import OpenAI
from gpt import detectgenre, genrtomusic

from flask import Flask, request, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/api/submit', methods=['POST'])
def submit_survey():
    try:
        data = request.get_json()
        keys_to_delete = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6']
        for key in keys_to_delete:
            if key in data:
                del data[key]
        
        print(detectgenre(data))
        return jsonify({'message': '설문이 제출되었습니다.'}), 200

    except Exception as e:
        print(f'Error: {str(e)}')  # 오류 메시지를 터미널에 출력
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=False)
