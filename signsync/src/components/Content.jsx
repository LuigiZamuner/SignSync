import { Box, Flex, HStack, Image } from "@chakra-ui/react";
import Card from "./Card";
import AvatarAnimation from "./AvatarAnimation";
import imagem from "../assets/Equipe.jpeg";

function Content() {
  return (
    <Box bg="#f5f2ec">
      <Box maxW="1100px" mx="auto" py={8}>

        {/* Parte superior */}
        <Flex
          justifyContent="space-between"
          alignItems="center"
          gap={8}
          margin={8}

        >
          <Box >
            <Card
              h2="Conectando Vozes e Sinais"
              h3="Este projeto consiste no desenvolvimento de uma extensão para o Google Chrome capaz de traduzir, em tempo real, o áudio de vídeos para Libras (Língua Brasileira de Sinais). O objetivo é promover a acessibilidade digital e facilitar o acesso de pessoas surdas a conteúdos educacionais, informativos e de entretenimento, contribuindo para uma experiência mais inclusiva na internet"
            />
          </Box>

          <Box
            flexShrink={0}
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="md"
          >
            <AvatarAnimation />
          </Box>
        </Flex>

        {/* Parte inferior */}
        <HStack
          spacing={8}
          mt={10}
          alignItems="stretch"
          margin={8}
        >
          <Card  
            h2="Do áudio para Libras em poucos segundos"
            h3="A extensão captura o áudio dos vídeos reproduzidos no navegador, converte a fala em texto e apresenta a tradução em Libras por meio de um avatar 3D. Dessa forma, conteúdos educacionais, informativos e de entretenimento podem se tornar mais acessíveis."
          />

          <Card
            h2="Mais inclusão na internet"
            h3="Grande parte dos conteúdos disponíveis na internet ainda não possui recursos em Libras. O projeto busca diminuir essa barreira, permitindo que mais pessoas tenham acesso a informações, aprendizado e entretenimento de forma mais inclusiva e independente."
          />
        </HStack>
        <HStack
          spacing={8}
          mt={10}
          alignItems="stretch"
          margin={8}
        >
          <Card
            h2="Desenvolvido pensando nas pessoas"
            h3="A ferramenta foi avaliada por participantes surdos e ouvintes com conhecimento em Libras. As opiniões e sugestões recebidas foram fundamentais para melhorar a experiência de uso e tornar a solução mais acessível."
          />

          <Card
            h2="Tecnologia a serviço da acessibilidade"
            h3="O projeto combina inteligência artificial, reconhecimento de voz e animação 3D para transformar áudio em Libras de forma automática. Tudo isso integrado em uma extensão simples de utilizar diretamente no navegador."
          />
        </HStack>
        <Box mt={10} margin={8}>
          <Card
            h2="Construindo um projeto cada vez melhor"
            h3="O objetivo é continuar expandindo o vocabulário disponível, aprimorar as animações e evoluir a ferramenta com a participação da comunidade, tornando a experiência cada vez mais natural e acessível."
          />
        </Box>

        <Flex
          justifyContent="space-between"
          alignItems="center"
          gap={8}
          margin={8}
        >
          <Box flex="1">
            <Card
              h2="Quem está por trás do projeto"
              h3="O Sign Sync foi desenvolvido como Trabalho de Conclusão de Curso em Engenharia de Computação por Pedro Camargo Brito, Luigi Zamuner Martin e Rogério Sabadin Mendes Filho, com orientação da Profª Dra. Andréia Damasio de Leles."
            />
          </Box>

          <Box
            flexShrink={0}
            maxW="450px"
          >
            <Image
              src={imagem}
              alt="Equipe"
              borderRadius="lg"
              width={"300px"}

            />
          </Box>
        </Flex>

      </Box>
    </Box>
  );
}

export default Content;