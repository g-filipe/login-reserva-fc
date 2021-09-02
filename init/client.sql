
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "-03:00";


--
-- Estrutura para tabela USUARIO
--

CREATE TABLE `USUARIO` (
  `id_usuario` int,
  `nome` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `senha` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Inicializa a tabela criando um usuario admin e dois usuarios comuns
--
INSERT INTO
`USUARIO` (`id_usuario`, `nome`, `email`, `senha`)
VALUES
(1, 'Filipe Galvão', 'galvaofilipe.adv@gmail.com', '12345'),
(2, 'Debora Brum', 'debrumneves@gmail.com', '12345'),
(3, 'admin', 'admin@admin.com', 'admin12345');

--
-- estabelece o índice para a tabela usuario
--
ALTER TABLE `USUARIO`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT para próximas entradas da tabela usuario
--
ALTER TABLE `USUARIO`
  MODIFY `id_usuario` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;




COMMIT;