# cloud-project-docker

## 🐳 建立 Docker Image

本專案包含兩個應用程式：web 與 api，以下說明如何分別使用 `docker build` 指令建立 image。

### 🔨 建立 web 應用程式的 Image

```bash
docker build -t rueiii/2025cloud:web ./web
```

### 🔨 建立 api 應用程式的 Image

```bash
docker build -t rueiii/2025cloud:api ./api
```

建立成功後可以透過 ``` docker images``` 查看 image 是否建立完成。

---

## ▶️ 執行 Container（使用 docker run）

本專案有兩個應用程式：web 與 api，以下是如何透過 `docker run` 指令執行對應的容器。

### 🟦 1. 執行 web 應用程式（顯示 HTML 訊息）

若你已經 build 完本地 image，可執行：

```bash
docker run -p 3000:3000 rueiii/2025cloud:web
```

開啟瀏覽器進入：http://localhost:3000
你會看到畫面顯示：```Hello from WEB version!```

### 🟨 2. 執行 api 應用程式（回傳 JSON）

```bash
docker run -p 4000:4000 rueiii/2025cloud:api
```

開啟瀏覽器進入：http://localhost:4000
你會看到畫面回傳：
```json
{ "message": "Hello from API version!" }
```

---

📦 你也可以先 docker pull 最新版本的 image：
```bash
docker pull rueiii/2025cloud:web
docker pull rueiii/2025cloud:api
```

---