import { atom, selector } from 'recoil';

export const agreeState = atom({
  key: 'agreeState',
  default: {
    age: false,
    use: false,
    marketing: false,
  },
});

export const allAgreedSelector = selector({
  key: 'allAgreedSelector',
  get: ({ get }) => {
    const { age, use, marketing } = get(agreeState);
    return age && use;
  },
});
