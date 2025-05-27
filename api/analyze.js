
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  const { bazi, gender } = req.body;
  const prompt = `八字：${bazi}，${gender}命。请按朱祖夏体系分析格局与用神。`;

  try {
    const completion = await openai.createChatCompletion({
      model: process.env.MODEL_ID,
      messages: [{ role: "user", content: prompt }],
    });
    res.status(200).json({ result: completion.data.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ result: "调用失败：" + error.message });
  }
}
