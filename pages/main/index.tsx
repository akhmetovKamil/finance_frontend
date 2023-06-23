import Head from 'next/head'
import {useSelectorWithType} from "@/hooks/useSelectorWithType";
import {useDispatchWithType} from "@/hooks/useDispatchWithType";
import {logoutThunk} from "@/store/reducers/authReducer";
import {getBalanceThunk} from "@/store/reducers/mainReducer";
import React from "react";
import {useRouter} from "next/router";
import AuthLayout from "@/components/auth/authLayout";
import HeaderLayout from "@/components/headerLayout";

const MainPage = () => {
    return <>
        <Head>
            <title>Main page</title>
            <meta name="Main" content="Generated by create next app"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <AuthLayout>
            <HeaderLayout>
                <Main/>
            </HeaderLayout>
        </AuthLayout>
    </>
}

const Main = () => {
    const router = useRouter()
    const dispatch = useDispatchWithType()
    const {balance, error, isFetching} = useSelectorWithType(state => state.main)
    return (
        <>
            <h1>Main after auth</h1>
            <button onClick={async () => {
                await router.push('/')
                dispatch(logoutThunk())
            }}>Logout
            </button>
            <button onClick={() => router.push('/auth')}>Login page</button>
            <button onClick={() => dispatch(getBalanceThunk())}>Get balance</button>
            {isFetching ? <div> Loading... </div> : null}
            <div>Balance from client: {balance}</div>
            <div>Errors: {error}</div>
        </>
    )
}

export default MainPage