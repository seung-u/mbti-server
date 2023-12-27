// pages/survey.js

import { useState } from "react";

export default function Survey() {
  const [formData, setFormData] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const apiUrl = "http://localhost:5000/api/submit";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setIsFormSubmitted(true);
      } else {
        // Handle error
      }
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div className="content-center items-center">
      <div className="bg-gray-100 min-h-screen p-8">
        <h1 className="text-4xl text-w-2xl font-bold mb-4 text-black">
          취향을 음악으로
        </h1>
        {isFormSubmitted ? (
          <div className="text-black text-2xl">
            <p>설문이 제출되었습니다.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="text-black space-y-4 font-bold"
          >
            <label>
              1. 음악을 들을 때 가사보다 멜로디를 더 중요하게 생각하시나요,
              아니면 그 반대인가요?
            </label>
            <div></div>
            <label>
              <input
                type="radio"
                name="음악을 들을때 가사와 멜로디 중 무엇을 더 중요하게 생각하는가"
                value="가사를 중요하게 생각합니다"
                onChange={handleInputChange}
              />
              <> </>가사를 중요하게 생각합니다.<> </>
            </label>
            <label>
              <input
                type="radio"
                name="음악을 들을때 가사와 멜로디 중 무엇을 더 중요하게 생각하는가"
                value="멜로디를 중요하게 생각합니다."
                onChange={handleInputChange}
              />
              <> </>멜로디를 중요하게 생각합니다.<> </>
            </label>
            <div></div>
            <label>2. 음악을 듣는 주된 목적이 무엇인가요?</label>
            <div></div>
            <label>
              <input
                type="radio"
                name="음악을 듣는 주된 목적이 무엇인가요"
                value="집중하기 위해서"
                onChange={handleInputChange}
              />
              <> </>집중<> </>
            </label>
            <label>
              <input
                type="radio"
                name="음악을 듣는 주된 목적이 무엇인가요"
                value="기분 전환을 위해서"
                onChange={handleInputChange}
              />
              <> </>기분 전환<> </>
            </label>
            <div></div>
            <label>3.여행을 갈 때 주로 어떤 음악을 듣나요?</label>
            <div></div>
            <label>
              <input
                type="radio"
                name="여행을 갈 때 주로 어떤 음악을 듣는가"
                value="마음이 차분해지는 음악을 듣는다."
                onChange={handleInputChange}
              />
              <> </>마음이 차분해지는 음악<> </>
            </label>
            <label>
              <input
                type="radio"
                name="여행을 갈 때 주로 어떤 음악을 듣는가"
                value="흥겨운 음악을 듣는다."
                onChange={handleInputChange}
              />
              <> </>흥겨운 음악<> </>
            </label>
            <div></div>
            <label>4.운동할 때 주로 어떤 스타일의 음악을 듣나요?</label>
            <div></div>
            <label>
              <input
                type="radio"
                name="운동할 때 주로 어떤 스타일의 음악을 듣는가"
                value="활기찬 음악을 듣는다."
                onChange={handleInputChange}
              />
              <> </>활기찬 음악<> </>
            </label>
            <label>
              <input
                type="radio"
                name="운동할 때 주로 어떤 스타일의 음악을 듣는가"
                value="차분해지는 음악을 듣는것을 좋아한다."
                onChange={handleInputChange}
              />
              <> </>차분해지는 음악<> </>
            </label>
            <div></div>
            <label>
              5.친구들과 함께 있을 때 어떤 종류의 음악을 듣는 것을 좋아하나요?
            </label>
            <div></div>
            <div className="gap-10"></div>
            <label>
              <input
                type="radio"
                name="친구들과 함께 있을 때 어떤 종류의 음악을 듣는 것을 좋아하는가"
                value="나의 취향을 친구들과 공유한다."
                onChange={handleInputChange}
              />
              <> </>나의 취향을 공유하고 말거야!<> </>
            </label>
            <label>
              <input
                type="radio"
                name="친구들과 함께 있을 때 어떤 종류의 음악을 듣는 것을 좋아하는가"
                value="인기있는 노래를 듣는다."
                onChange={handleInputChange}
              />
              <> </>요즘 인기있는 노래<> </>
            </label>
            <div></div>
            <label>
              6.여유로운 시간에 음악을 들을 때 어떤 분위기를 선호하나요?
            </label>
            <div></div>
            <label>
              <input
                type="radio"
                name="여유로운 시간에 음악을 들을 때 어떤 분위기를 선호하는가"
                value="흥겨운 분위기의 음악을 듣는다."
                onChange={handleInputChange}
              />
              <> </>흥겨운 분위기의 음악<> </>
            </label>
            <label>
              <input
                type="radio"
                name="여유로운 시간에 음악을 들을 때 어떤 분위기를 선호하는가"
                value="차분한 분위기의 음악을 듣는다."
                onChange={handleInputChange}
              />
              <> </>차분한 분위기의 음악<> </>
            </label>
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
