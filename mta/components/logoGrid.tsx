import { createStyles, Paper, Tooltip } from "@mantine/core";
import Image from "next/image";

interface CardGradientProps {
  image: any;
  width: number;
  height: number;
  brand: string;
}

export function LogoGrid({ image, width, height, brand }: CardGradientProps) {
  const { classes } = useStyles();
  return (
    <Paper withBorder radius="md" className={classes.card} >
       <Tooltip.Floating
          label={brand}
          position="bottom"
        >
          <div>
              <Image alt="Logo" src={image} width={width} height={height} />

          </div>
        </Tooltip.Floating>
    </Paper>
  );
}

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    overflow: "hidden",
    transition: "transform 150ms ease, box-shadow 100ms ease",
    padding: theme.spacing.xl,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 120,

    "&:hover": {
      boxShadow: theme.shadows.sm,
      transform: "scale(1.02)",
    },
  },
}));
