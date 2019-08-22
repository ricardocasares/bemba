import { motion } from 'framer-motion';
import { styled } from '@/css/styled';

export const GradientBox = styled(motion.div)`
  padding: 15px;
  border-radius: 5px;
  max-width: 200px;
  height: 100px;
  overflow: hidden;
  word-wrap: break-word;
  background: #5f3dc4;

  h5 {
    color: #b197fc;
  }
`;
