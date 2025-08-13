import { SInput, SInputWrapper, SLabel } from '@shared/ui/input';

interface IPostFilterInput {
  value: string;
  setValue: (value: string) => void;
}

export const PostFilterInput = ({ value, setValue }: IPostFilterInput) => {
  return (
    <SInputWrapper>
      <SLabel htmlFor={'username'}>Filter by username</SLabel>
      <SInput
        type={'text'}
        id={'username'}
        value={value}
        placeholder={'Input name'}
        onChange={(e) => setValue(e.target.value)}
      />
    </SInputWrapper>
  );
};
