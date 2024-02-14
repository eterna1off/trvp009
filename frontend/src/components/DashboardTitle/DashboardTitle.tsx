import React from 'react';
import CustomTitle from "../CustomTitle/CustomTitle";
import {Button} from "react-bootstrap";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {setModalTitle, toggleModal} from "../../store/slices/utilsSlice";

const DashboardTitle = () => {
    const dispatch = useAppDispatch();

    const addCallback = () => {
        dispatch(setModalTitle('Create Order'));
        dispatch(toggleModal());
    };

    return (
        <div className={"d-flex gap-3 align-items-center"}>
            <CustomTitle>Заказы</CustomTitle>
            <Button
                style={{ background: "#3E5F8A", color: "#FFF" }}
                className={"ps-3 pe-3 border-0 button-dark-green-hover"}
                onClick={addCallback}
                variant={"success"}
            >
                <p>Добавить заказ</p>
            </Button>
        </div>
    );
}

export default DashboardTitle;