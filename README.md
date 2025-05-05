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