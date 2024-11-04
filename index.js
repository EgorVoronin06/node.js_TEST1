import { createServer} from "node:http"

const hostname = '127.0.0.1'; /// ip-адрес на котором хотим запустить 
const port = 3000;            /// на 3000 порту
const server = createServer((req, res) => { /// сохраняем ссылку creatServer(функция) в пременной server
    const url =  req.url
    const method = req.method
  res.statusCode = 200;///статус того что все хорошо (500-ошибка с другой стороны, 400- что-то плохо снашей стороны )
  res.setHeader('Content-Type', 'text/html');// контент кторый мы приссылаем это текст 
  if (url === '/' && method === 'GET') {
    res.write ('<div class="test" > MAIN PAGE <div>');

  }
  res.end();/// тело запроса
}); ////  вызывается вся фунция на порту 3000, функция принимает в себя 2 параметра: 1) req(запрос) 2)res (отправление обратно пользователю)

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
