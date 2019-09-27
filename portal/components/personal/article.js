import React, {Component} from 'react';
import styled from "styled-components";
import { Button,Avatar, Theme,Label ,Icon,Divider,consts as Widget ,} from "@lugia/lugia-web";
import avatar from "../../assets/images/mega.png";

const UL = styled.ul`
  padding: 20px;
`;

const Li = styled.li`
  border-bottom: 1px solid #e8e8e8;
  margin: 0 0 20px;
`;
const RemarkBox = styled.div`
  margin: 12px 0;
`;

const Title = styled.div`
  color: rgba(0,0,0,.85);
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
`;

const Text = styled.div`
  margin: 12px 0;
  color: rgba(0,0,0,.65);
  font-size: 14px;
  line-height: 22px;
`;
const Time = styled.span`
  margin: 12px 0;
  color: rgba(0,0,0,.25);
  font-size: 14px;
  line-height: 22px;
`;

const Link = styled.a`
 margin: 0 6px;
 color: #4d63ff;
 opacity: 0.8;
`;


const theme = {
  [Widget.Button]: {
    Container: {
      normal: {
        height: 22,
        margin:{
          right: 10
        },
        background:{
          color:'#fafafa'
        },
        border:{
          top: {
            width: 1,
            color: '#ccc',
            style: 'solid'
          },
          bottom: {
            width: 1,
            color: '#ccc',
            style: 'solid'
          },
          left: {
            width: 1,
            color: '#ccc',
            style: 'solid'
          },
          right: {
            width: 1,
            color: '#ccc',
            style: 'solid'
          },
        }
      },
      hover: {
        border:{
          top: {
            width: 1,
            color: '#ccc',
            style: 'solid'
          },
          bottom: {
            width: 1,
            color: '#ccc',
            style: 'solid'
          },
          left: {
            width: 1,
            color: '#ccc',
            style: 'solid'
          },
          right: {
            width: 1,
            color: '#ccc',
            style: 'solid'
          },
        },
        background:{
          color:'#fafafa'
        },
      },
    },
    ButtonText: {
      hover: {
        color:'rgba(0,0,0,0.45)',
      },
    },
  },
  [Widget.Label]: {
    LabelConfig: {
      normal: {
        color:'rgba(0,0,0,.45)',
        margin: {
          left: 6,
          right: 6,
        },
      }
    },
  },
  [Widget.Avatar]: {
    Container: {
      normal: {
        height: 20,
        width: 20
      },
    },
  }

};


export default class Article extends Component {
  render() {
    const {data =[]} = this.props;
    return (
     <UL>
       <Theme config={theme}>
       {data.map( item => {
          const {title,remark,text,img,author,link,create_time,star,support,message} = item;
         return <Li>
           <Title>{title}</Title>
           <RemarkBox>
             {remark.map( item => {
               return <Button>{item}</Button>
             })}
           </RemarkBox>
           <Text>{text}</Text>
             <RemarkBox>
               <Avatar type={'img'} src={avatar} />
               <Label>{author}</Label>
               <Label>发布在</Label>
               <Link target={'_blank'} href={link}>{link}</Link>
               <Time>{create_time}</Time>
             </RemarkBox>
             <RemarkBox>
               <Label><Icon iconClass={"lugia-icon-financial_star_o"} /> {star}</Label>
               <Divider type="vertical" />
               <Label><Icon iconClass={"lugia-icon-financial_like_o"} /> {support}</Label>
               <Divider type="vertical" />
               <Label><Icon iconClass={"lugia-icon-financial_describe"} /> {message}</Label>
             </RemarkBox>


         </Li>
       })}
       </Theme>
     </UL>
    );
  }
}