import { useRef } from 'react';
import { useAppSelector } from '../../../redux/hooks';
import { usePostCertMutation } from '../../../redux/services/userApi';
import { TableSubmitButton } from '../../Buttons/TableSubmitButton/TableSubmitButton.styled';
import { TableTextInput } from '../../Inputs/TableInput/TableInput.styled';
import { StyledTableBodyItem } from '../TableBodyItem/TableBodyItem.styled';
import { StyledTableBodyFormRow } from './TableBodyFormRow.styled';

export const isInputRefNull = (inputCurrent: HTMLInputElement | null) => {
    if (inputCurrent === null) {
        throw new Error('inputCurrent is Null');
    }
};

export const isInputRefValueEmpty = (inputCurrentValue: string | undefined) => {
    if (inputCurrentValue === '') {
        throw new Error('inputCurrentValue is Empty');
    }
};

const TableBodyFormRow = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const accessToken = useAppSelector((state) => state.user.token);
    const [postCert, { isLoading }] = usePostCertMutation();
    const SubmitCertHandler = () => {
        //inputRef.current가 null인가?
        isInputRefNull(inputRef.current);
        isInputRefValueEmpty(inputRef.current?.value);
        postCert({ url: inputRef.current?.value, accessToken: accessToken });
    };

    return (
        <StyledTableBodyFormRow>
            <StyledTableBodyItem textAlign="center" colSpan={4}>
                <TableTextInput placeholder="Input URL" ref={inputRef} />
            </StyledTableBodyItem>

            <StyledTableBodyItem textAlign="center">
                <TableSubmitButton onClick={SubmitCertHandler}>Submit</TableSubmitButton>
            </StyledTableBodyItem>
        </StyledTableBodyFormRow>
    );
};

export default TableBodyFormRow;
