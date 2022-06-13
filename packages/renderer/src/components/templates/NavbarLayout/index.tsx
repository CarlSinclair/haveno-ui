// =============================================================================
//  Copyright 2022 Haveno
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
// =============================================================================

import type { FC } from "react";
import type { DefaultProps } from "@mantine/core";
import { Box, createStyles, Stack } from "@mantine/core";
import { Navbar } from "@organisms/Navbar";

export const NavbarLayout: FC<DefaultProps> = ({
  children,
  classNames,
  className,
  ...rest
}) => {
  const { classes, cx } = useStyles(undefined, {
    name: "NavbarLayout",
    classNames,
  });

  return (
    <Stack className={cx(classes.container, className)} spacing={0} {...rest}>
      <Navbar />
      <Box className={classes.contentArea}>{children}</Box>
    </Stack>
  );
};

const useStyles = createStyles((theme) => ({
  container: {
    alignItems: "stretch",
    flex: 1,
  },
  contentArea: {
    background: theme.colors.gray[0],
    display: "flex",
    flex: 1,
    padding: theme.spacing.sm,
  },
}));
