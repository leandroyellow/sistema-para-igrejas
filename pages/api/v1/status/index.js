function status(request, response) {
  response.status(200).json({ chave: "sou aluno acima da média" });
}
export default status;
