import { styled } from '@/css/styled';
import { motion } from 'framer-motion';

export const animations = {
  show: { opacity: 1 },
  hide: { opacity: 0 },
};

export const List = styled(motion.ul)`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const ListItem = styled(motion.li)`
  display: flex;
  align-items: center;
`;

export const StationButton = styled(motion.button)`
  border: none;
  background: transparent;
  padding: 10px 0;
  width: 100%;
  text-align: left;
  min-width: 0;
`;

export const Title = styled(motion.h3)`
  color: #555;
  font-weight: 500;
`;

export const Subtitle = styled(motion.h4)`
  font-weight: 500;
  margin-bottom: 5px;
  color: #444;
`;

export const StationLink = styled(motion.a)`
  text-decoration: none;
`;
