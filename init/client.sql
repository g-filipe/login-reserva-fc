
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "-03:00";


--
-- Estrutura para tabela USUARIO
--

CREATE TABLE USUARIO (
  id_usuario int,
  nome varchar(200) NOT NULL,
  email varchar(200) NOT NULL,
  senha varchar(20) NOT NULL,
  isAdmin boolean DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Inicializa a tabela criando um usuario admin e dois usuarios comuns
--
INSERT INTO
USUARIO (id_usuario, nome, email, senha, isAdmin)
VALUES
(1, 'Filipe Galvão', 'galvaofilipe.adv@gmail.com', '12345', 0),
(2, 'Debora Brum', 'debrumneves@gmail.com', '12345', 0),
(3, 'admin', 'admin@admin.com', 'admin12345', 1),
(4, 'Daiane Marcon', 'daianemarcon@gmail.com', '12345', 0);

--
-- estabelece o índice para a tabela usuario
--
ALTER TABLE USUARIO
  ADD PRIMARY KEY (id_usuario);

--
-- AUTO_INCREMENT para próximas entradas da tabela usuario
--
ALTER TABLE USUARIO
  MODIFY id_usuario int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

COMMIT;

START TRANSACTION;

--
-- Estrutura para tabela AGENDASP - 1 para escritorio SP e 2 para escritorio Santos. 
-- 'confirmado' inicia como true e se for cancelada a reserva muda para false
--
CREATE TABLE AGENDASP (
  id_reservaSP int NOT NULL,
  id_usuario int NOT NULL,
  escritorio int DEFAULT 1,
  dia int NOT NULL,
  mes int NOT NULL,
  ano int NOT NULL,
  mesa int NOT NULL,
  confirmado boolean DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- estabelece o índice para a tabela agendasp e implementa auto_increment no primary
--
ALTER TABLE AGENDASP
  ADD PRIMARY KEY (id_reservaSP);

  ALTER TABLE AGENDASP
  MODIFY id_reservaSP int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

COMMIT;

START TRANSACTION;

--
-- Estrutura para tabela AGENDASANTOS - 1 para escritorio SP e 2 para escritorio Santos. 
-- 'confirmado' inicia como true e se for cancelada a reserva muda para false
--

CREATE TABLE AGENDASANTOS (
  id_reservaSantos int NOT NULL,
  id_usuario int NOT NULL,
  escritorio int DEFAULT 2,
  dia int NOT NULL,
  mes int NOT NULL,
  ano int NOT NULL,
  mesa int NOT NULL,
  confirmado boolean DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- estabelece o índice para a tabela agendasantos e implementa auto_increment no primary
--
ALTER TABLE AGENDASANTOS
  ADD PRIMARY KEY (id_reservaSantos);

  ALTER TABLE AGENDASANTOS
  MODIFY id_reservaSantos int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

COMMIT;