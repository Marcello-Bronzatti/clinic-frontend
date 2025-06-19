# Clinic UI 💻

Frontend em Angular para o sistema de gerenciamento de consultas médicas. Permite login, cadastro de pacientes/profissionais e agendamento de consultas.

---

## 🧰 Tecnologias Utilizadas

- Angular 17
- Tailwind CSS
- Angular Router
- Reactive Forms
- Auth com JWT
- Consumo de API REST

---

## 💾 Instalação

### 1. Clonar o projeto

```bash
git clone https://github.com/marcello-bronzatti/clinic-frontend.git
cd clinic-frontend
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar ambiente

Edite o arquivo:

```ts
// src/environments/environment.ts
export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:5000/api'
};
```

### 4. Rodar o projeto

```bash
ng serve
```

Acesse via:
```
http://localhost:4200
```

---

## 🧪 Funcionalidades

- ✅ Tela de login
- ✅ Cadastro de paciente
- ✅ Cadastro de profissional
- ✅ Agendamento de consultas
- ✅ Visualização da agenda por profissional
- ✅ Cancelamento de consultas
- ✅ Validações (horários, CPF, CRM, etc.)

---

## 📷 Telas

- Login
- Lista e cadastro de pacientes
- Lista e cadastro de profissionais
- Agendamento
- Consultas por profissional

---

## 🔒 Login de Teste

```text
Usuário: admin
Senha: admin
```

---

## 📄 Autor

Desenvolvido por **Marcello Bronzatti**
