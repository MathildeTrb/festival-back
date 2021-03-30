import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = process.env.PORT || 8000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix("/api")
  await app.listen(port);
}
bootstrap().then(() => {
  console.log(`API running on http://localhost:${port}/api`)
});
