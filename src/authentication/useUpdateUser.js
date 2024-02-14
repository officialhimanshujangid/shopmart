/* eslint-disable no-unused-vars */


import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../services/apiAuth";


export function useUpdateUser() {
    const queryClient = useQueryClient();
    const { mutate: updateUser, status } = useMutation({
        mutationFn: updateCurrentUser,
        onSuccess: ({ user }) => {

            queryClient.invalidateQueries({ queryKey: ["user"] });

        },
        onError: (err) => console.error(err),
    });
    const isUpdating = status === "pending" ? true : false
    return { updateUser, isUpdating };
}