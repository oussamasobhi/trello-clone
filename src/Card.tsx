import { CardContainer } from "./styles"
import React from "react"

interface CardProps  {
  text: string
  id:string
}
export const Card = ({ text }: CardProps) => {
return <CardContainer>{text}</CardContainer>
}
