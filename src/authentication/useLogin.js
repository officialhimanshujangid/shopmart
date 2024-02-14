import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../services/apiAuth';
import { useNavigate } from 'react-router-dom';


export function useLogin() {
    const navigate = useNavigate();
    const queryClient = useQueryClient()

    const { mutate: login, status } = useMutation({
        mutationFn: ({ email, password }) => loginApi({ email, password }),
        onSuccess: (user) => {
            queryClient.setQueryData(['user'], user.user)
            navigate('/dashboard', { replace: true });
        },
        onError: (err) => {
            console.log('ERROR', err);
        },
    });

    let isLoading;
    if (status !== "pending") isLoading = false
    if (status === "pending") isLoading = true

    return { login, isLoading };
}
