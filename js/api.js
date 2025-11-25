// API-интерфейс для взаимодействия с нейросетью

class NeuroAPI {
  constructor() {
    this.baseUrl = 'https://api.example-neuro-service.com'; // Заменить на реальный API
    this.apiKey = null; // Будет установлен при инициализации
  }

  // Установка API ключа
  setApiKey(apiKey) {
    this.apiKey = apiKey;
  }

  // Метод для отправки запроса к нейросети
  async sendQuery(query, options = {}) {
    // В демонстрационных целях реализуем имитацию API
    return this.mockApiCall(query, options);
  }

  // Имитация API вызова
  async mockApiCall(query, options) {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Генерация более реалистичных ответов в зависимости от типа запроса
        let response;
        
        // Определяем тип запроса по ключевым словам
        const lowerQuery = query.toLowerCase();
        
        if (lowerQuery.includes('привет') || lowerQuery.includes('здравствуй') || lowerQuery.includes('hello')) {
          response = `Привет! Я KEV - нейросеть. Рад приветствовать вас. Как я могу вам помочь?`;
        } else if (lowerQuery.includes('кто ты') || lowerQuery.includes('твой') || lowerQuery.includes('создатель')) {
          response = `Я KEV - передовая нейросеть, разработанная для помощи в различных вопросах. Я могу отвечать на вопросы, помогать с анализом данных, генерировать текст и многое другое.`;
        } else if (lowerQuery.includes('погода') || lowerQuery.includes('температура') || lowerQuery.includes('дождь')) {
          response = `Я KEV, нейросеть, и могу помочь вам с анализом информации о погоде, но для точного прогноза рекомендую использовать специализированные сервисы. В вашем регионе, как правило, погода зависит от времени года и географического положения.`;
        } else if (lowerQuery.includes('время') || lowerQuery.includes('час') || lowerQuery.includes('минут')) {
          const now = new Date();
          response = `Сейчас ${now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}. Я KEV, нейросеть, могу помочь с различными вопросами, но текущее время определяется системой.`;
        } else if (lowerQuery.includes('спасибо') || lowerQuery.includes('благодарю')) {
          response = `Вам спасибо! Я KEV - нейросеть, всегда рад помочь. Если у вас есть другие вопросы, не стесняйтесь спрашивать!`;
        } else if (lowerQuery.includes('как дела') || lowerQuery.includes('как жизнь') || lowerQuery.includes('как себя')) {
          response = `У меня, как у нейросети KEV, всё отлично! Я функционирую в штатном режиме и готов помочь вам с любыми вопросами. А как у вас дела?`;
        } else if (lowerQuery.includes('искусственный') || lowerQuery.includes('интеллект') || lowerQuery.includes('ai') || lowerQuery.includes('ии')) {
          response = `Искусственный интеллект (ИИ) - это область компьютерных наук, которая стремится создавать программные или аппаратные системы, способные имитировать человеческий интеллект. Я, KEV - пример такой системы. ИИ может включать в себя такие подразделения, как машинное обучение, глубокое обучение, обработка естественного языка и компьютерное зрение.`;
        } else if (lowerQuery.includes('нейросеть') || lowerQuery.includes('нейро') || lowerQuery.includes('сеть')) {
          response = `Нейросеть - это вычислительная система, вдохновленная биологическими нейронными сетями мозга. Я, KEV, являюсь примером такой системы. Нейросети состоят из множества взаимосвязанных узлов (нейронов), организованных в слои, и способны распознавать сложные паттерны, обучаться на примерах и принимать решения.`;
        } else {
          // Общие ответы для остальных запросов
          const generalResponses = [
            `Относительно вашего запроса "${query}", могу сказать, что современные нейросети используют глубокое обучение для анализа данных и генерации ответов. Я, KEV, являюсь передовой нейросетью, способной обрабатывать различные типы запросов.`,
            `На основе вашего запроса "${query}": нейросети представляют собой вычислительные системы, вдохновленные биологическими нейронными сетями мозга. Я, KEV, могу помочь вам с анализом и генерацией информации на эту тему.`,
            `В ответ на "${query}": искусственный интеллект развивается стремительными темпами, и его применение охватывает множество сфер деятельности. Как нейросеть KEV, я стараюсь предоставлять максимально точную и полезную информацию.`,
            `С учетом вашего запроса "${query}": машинное обучение позволяет системам автоматически извлекать знания из данных. Я, KEV, использую передовые методы машинного обучения для обработки ваших запросов.`,
            `По вашему запросу "${query}": трансформаторные архитектуры нейросетей революционизировали обработку естественного языка. Я, KEV, построен на основе современных архитектур, что позволяет мне эффективно понимать и отвечать на вопросы.`,
            `Интересный вопрос: "${query}". Как нейросеть KEV, я анализирую множество факторов и контекстов, чтобы предоставить вам наиболее релевантный ответ.`
          ];
          
          response = generalResponses[Math.floor(Math.random() * generalResponses.length)];
        }
        
        // Сохраняем запрос и ответ в историю
        this.saveToHistory(query, response);
        
        resolve({
          success: true,
          data: {
            query: query,
            response: response,
            timestamp: new Date().toISOString(),
            tokensUsed: Math.floor(Math.random() * 100) + 50
          }
        });
      }, 1500 + Math.random() * 1000); // Случайное время задержки для реалистичности
    });
  }

  // Метод для сохранения запроса и ответа в историю
  saveToHistory(query, response) {
    const history = this.getHistoryFromStorage();
    const newItem = {
      id: Date.now(), // Используем timestamp как уникальный ID
      query: query,
      response: response,
      timestamp: new Date().toISOString()
    };
    
    history.unshift(newItem); // Добавляем новый элемент в начало массива
    
    // Ограничиваем историю 50 последними записями
    if (history.length > 50) {
      history.splice(50);
    }
    
    localStorage.setItem('neuroAPIHistory', JSON.stringify(history));
  }
  
  // Метод для получения истории из localStorage
  getHistoryFromStorage() {
    const historyString = localStorage.getItem('neuroAPIHistory');
    return historyString ? JSON.parse(historyString) : [];
  }
  
  // Метод для получения истории запросов
  async getHistory() {
    // Возвращаем историю из localStorage
    return new Promise((resolve) => {
      setTimeout(() => {
        const history = this.getHistoryFromStorage();
        resolve({
          success: true,
          data: history
        });
      }, 500);
    });
  }

  // Метод для очистки истории запросов
  async clearHistory() {
    return new Promise((resolve) => {
      setTimeout(() => {
        localStorage.removeItem('neuroAPIHistory');
        resolve({
          success: true,
          message: "История успешно очищена"
        });
      }, 300);
    });
  }
}

// Экспортируем NeuroAPI для использования в других модулях
// В браузере можно использовать глобально
window.NeuroAPI = NeuroAPI;