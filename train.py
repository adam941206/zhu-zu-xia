import openai
import os

# 设置你的 OpenAI API 密钥
openai.api_key = os.getenv("OPENAI_API_KEY")

# 启动微调任务
response = openai.FineTuningJob.create(
    training_file=os.getenv("TRAINING_FILE_ID"),
    model="gpt-3.5-turbo"
)

# 输出结果
print("微调任务已创建 ✅")
print("任务 ID:", response["id"])
print("状态:", response["status"])