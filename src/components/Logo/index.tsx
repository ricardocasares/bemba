import styled from "@emotion/styled";
import { Radio } from "@geist-ui/react-icons";
import { useFrequency } from "@/lib/hooks/useFrequency";
import { mapValueToRange } from "@/lib/utils";

type Icon = {
  alpha: number;
};

const Icon = styled(Radio)<Icon>`
  path {
    color: ${({ alpha }) => `rgba(0, 112, 243, ${alpha || 1})`};
  }
`;

export const Logo = () => {
  const freq = useFrequency();
  const alpha = mapValueToRange(freq, [0, 255], [0, 1]);

  return <Icon alpha={alpha} />;
};
