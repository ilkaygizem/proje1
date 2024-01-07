import { Global, useMantineTheme } from "@mantine/core";

export default function GlobalStyles() {
  const theme = useMantineTheme();
  return (
    <Global
      styles={() => ([{
        body: {
          backgroundColor: theme.white,
          fontFamily: 'DM Sans, sans-serif',
        },
      },
    ])}
    />
  );
}
