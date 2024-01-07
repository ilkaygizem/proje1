import { useState } from "react";
import {
  Button,
  createStyles,
  Modal,
  Paper,
  Text,
  Tooltip,
  Title,
} from "@mantine/core";
import Image from "next/image";
import { cutString } from "../helpers/cutString";

interface CardGradientProps {
  title: string;
  brand: string;
  description: string;
  image: any;
  width: number;
  height: number;
}

export function LessonGrid({
  title,
  description,
  brand,
  image,
  width,
  height,
}: CardGradientProps) {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  const shortDesc =  cutString(description, 160);
  return (
    <>
      <Paper withBorder radius="md" className={classes.card}>
        <Tooltip
          inline
          label={brand}
          position="right"
          withArrow
          transition="fade"
          transitionDuration={300}
        >
          <div>
            <Image alt="Logo" src={image} width={width} height={height} />
          </div>
        </Tooltip>

        <Text size="xl" weight={500} mt="md">
          {title}
        </Text>

        <Text size="xs" mt="sm" color="dimmed">
          {cutString(description, 160)}
        </Text>
        <Button
          variant="outline"
          color="gray"
          size="xs"
          mt="xl"
          onClick={() => setOpened(true)}
        >
          Dersi Görüntüleyin
        </Button>
      </Paper>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        size="xl"
      >
          <Image alt="Logo" src={image} width={width} height={height} />
          <Title order={3} my={25} weight={500}>
            {title}
          </Title>
          <Text size="md" mb={25}>
            {description}
          </Text>
          <Button
            variant="outline"
            color="gray"
            mb={40}
            onClick={() => setOpened(false)}
          >
           Pencereyi Kapat
          </Button>
      </Modal>
    </>
  );
}

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    cursor: "pointer",
    overflow: "hidden",
    transition: "transform 150ms ease, box-shadow 100ms ease",
    padding: theme.spacing.xl,
    paddingLeft: theme.spacing.xl * 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "space-between",

    "&:hover": {
      boxShadow: theme.shadows.md,
      transform: "scale(1.02)",
    },
    "&:hover::before": {
      background: "#e30427",
    },

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      width: 4,
      background: theme.colors.gray[2],
    },
  },
}));
