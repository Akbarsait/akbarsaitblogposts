# Run the pip install command before running this script: 
# pip install openai==0.28

import openai

openai.api_key = "your-api-key-here"  # Replace with your key

def ask_openai(question):
    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": question}
            ]
        )
        return response['choices'][0]['message']['content']
    except Exception as e:
        return f"An error occurred: {e}"

if __name__ == "__main__":
    user_question = input("Ask me anything: ")
    answer = ask_openai(user_question)
    print("AI Response:", answer)