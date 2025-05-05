# cloud-project-docker

## 🧠 專案自動化邏輯與 Tag 設計說明

### 🗂️ 自動產生 Container Image 的邏輯

本專案透過 GitHub Actions 建立自動化流程，在下列情況會自動產生對應的 Docker Image：

- 當 push 到 main 分支時
- 或是手動執行 workflow（GitHub 上的 Run workflow）

每次觸發會自動：
1. build `web/` 目錄中的 Dockerfile，產生 web image
2. build `api/` 目錄中的 Dockerfile，產生 api image
3. 將這兩個 image 分別以指定 tag 推送到 DockerHub 的 `2025cloud` Repo

---

### 🏷️ Tag 命名設計邏輯

| Image 類型 | Docker Tag      | 說明                                       |
|------------|------------------|--------------------------------------------|
| Web App    | `web-auto`       | 自動化流程產生，對應 `web/` Dockerfile     |
| API App    | `api-auto`       | 自動化流程產生，對應 `api/` Dockerfile     |
| 本地手動建置 | `web`、`api`     | 本地端測試用，手動 build 後上傳             |

我使用 `-auto` 結尾來區分自動化產生的 tag，這樣有助於助教或使用者知道哪些是 CI/CD 產生的，哪些是手動 build 的版本。

---

### 📦 DockerHub 上的 tag 範例

- [rueiii/2025cloud:web-auto](https://hub.docker.com/r/rueiii/2025cloud/tags)
- [rueiii/2025cloud:api-auto](https://hub.docker.com/r/rueiii/2025cloud/tags)

你可以透過以下指令從 DockerHub 拉下並執行：

```bash
docker pull rueiii/2025cloud:web-auto
docker run -p 3000:3000 rueiii/2025cloud:web-auto

docker pull rueiii/2025cloud:api-auto
docker run -p 4000:4000 rueiii/2025cloud:api-auto
```

--- 

## 使用方式

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