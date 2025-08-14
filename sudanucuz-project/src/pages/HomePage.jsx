import React, {useState} from "react";
import { Route, Switch } from "react-router-dom";
import ProductCard from "../components/CategoryCard";
import Slider from "../components/Slider";
import { Button, Alert } from 'reactstrap';
import EditorsPick from "../components/EditorsPick";

export default function HomePage(){
      const [visible, setVisible] = useState(true);

    return (
        <>
            <Slider/>
            <EditorsPick/>

           
        </>
    );
}