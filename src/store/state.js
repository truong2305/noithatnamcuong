export const state = {
    loader : false,
    categories : [
        {
            name : 'Gần đây nhất',
            id : 6,
            slug : 'gan-day-nhat'
        },
        {
            name : 'Giấy dán tường Hàn Quốc',
            id : 1,
            slug : 'giay-dan-tuong-han-quoc'
        },
        {
            name : 'Giấy dán tường Trung Quốc',
            id : 2,
            slug : 'giay-dan-tuong-trung-quoc'
        },
        {
            name : 'Giấy dán tường trẻ em',
            id : 3,
            slug : 'giay-dan-tuong-tre-em'
        },
        {
            name : 'Giấy dán tường giả đá, gỗ',
            id : 4,
            slug : 'giay-dan-tuong-gia-da-go'
        },
        {
            name : 'Tranh dán tường',
            id : 5,
            slug : 'tranh-dan-tuong'
        }
    ],
    productsHome : [],
    products : [
        {
            id : 30,
            cate_id : 6,
            name : 'Tranh thiếu nữ',
            slug : 'tranh-thieu-nu',
            product_code : 'thieunu',
            img : 'mn1.jpg',
            type : [
                {
                    img : 'mn1.jpg',
                    name : 'Tranh thiếu nữ'
                },
                {
                    img : 'mn2.jpg',
                    name : 'Tranh thiếu nữ'
                },
                {
                    img : 'mn3.jpg',
                    name : 'Tranh thiếu nữ'
                },
                {
                    img : 'mn4.jpg',
                    name : 'Tranh thiếu nữ'
                },
                {
                    img : 'mn5.jpg',
                    name : 'Tranh thiếu nữ'
                }
        
            ],
            price : 200000,
            unit : 'm2'
        },
        {
            id : 38,
            cate_id : 6,
            name : 'Tranh thiếu nữ 2',
            slug : 'tranh-thieu-nu-2',
            product_code : 'thieunu2',
            img : 'mn43-min.jpg',
            type : [
                {
                    img : 'mn43-min.jpg',
                    name : 'Tranh thiếu nữ 2'
                },
                {
                    img : 'mn44-min.jpg',
                    name : 'Tranh thiếu nữ 2'
                },
                {
                    img : 'mn45-min.jpg',
                    name : 'Tranh thiếu nữ 2'
                },
                {
                    img : 'mn46-min.jpg',
                    name : 'Tranh thiếu nữ 2'
                }
               
            ],
            price : 200000,
            unit : 'm2'
        },
        {
            id : 31,
            cate_id : 6,
            name : 'Tòa nhà thành phố',
            slug : 'toa-nha-thanh-pho',
            product_code : 'toanhathanhpho',
            img : 'mn6-min.jpg',
            type : [
                {
                    img : 'mn6-min.jpg',
                    name : 'Tòa nhà thành phố'
                },
                {
                    img : 'mn7-min.jpg',
                    name : 'Tòa nhà thành phố'
                },
                {
                    img : 'mn8-min.jpg',
                    name : 'Tòa nhà thành phố'
                },
                {
                    img : 'mn9-min.jpg',
                    name : 'Tòa nhà thành phố'
                },
                {
                    img : 'mn10-min.jpg',
                    name : 'Tòa nhà thành phố'
                }
        
            ],
            price : 200000,
            unit : 'm2'
        },
        {
            id : 32,
            cate_id : 6,
            name : 'Hội họa',
            slug : 'hoi-hoa',
            product_code : 'hoihoa',
            img : 'mn12-min.jpg',
            type : [
                {
                    img : 'mn12-min.jpg',
                    name : 'Hội họa'
                },
                {
                    img : 'mn13-min.jpg',
                    name : 'Hội họa'
                },
                {
                    img : 'mn14-min.jpg',
                    name : 'Hội họa'
                },
                {
                    img : 'mn15-min.jpg',
                    name : 'Hội họa'
                },
                {
                    img : 'mn16-min.jpg',
                    name : 'Hội họa'
                },
                {
                    img : 'mn17-min.jpg',
                    name : 'Hội họa'
                }
        
            ],
            price : 200000,
            unit : 'm2'
        },
        {
            id : 33,
            cate_id : 6,
            name : 'Thiên nhiên',
            slug : 'thien-nhien',
            product_code : 'thieunu',
            img : 'mn18-min.jpg',
            type : [
                {
                    img : 'mn18-min.jpg',
                    name : 'Thiên nhiên'
                },
                {
                    img : 'mn19-min.jpg',
                    name : 'Thiên nhiên'
                },
                {
                    img : 'mn20-min.jpg',
                    name : 'Thiên nhiên'
                },
                {
                    img : 'mn21-min.jpg',
                    name : 'Thiên nhiên'
                }
        
            ],
            price : 200000,
            unit : 'm2'
        },
        {
            id : 34,
            cate_id : 6,
            name : 'Hoa lá',
            slug : 'hoa-la',
            product_code : 'hoala',
            img : 'mn22-min.jpg',
            type : [
                {
                    img : 'mn22-min.jpg',
                    name : 'Hoa lá'
                },
                {
                    img : 'mn23-min.jpg',
                    name : 'Hoa lá'
                },
                {
                    img : 'mn24-min.jpg',
                    name : 'Hoa lá'
                },
                {
                    img : 'mn25-min.jpg',
                    name : 'Hoa lá'
                },
                {
                    img : 'mn26-min.jpg',
                    name : 'Hoa lá'
                }
        
            ],
            price : 200000,
            unit : 'm2'
        },
        {
            id : 35,
            cate_id : 6,
            name : 'Hoa lá 2',
            slug : 'hoa-la-2',
            product_code : 'hoala2',
            img : 'mn27-min.jpg',
            type : [
                {
                    img : 'mn27-min.jpg',
                    name : 'Hoa lá 2'
                },
                {
                    img : 'mn28-min.jpg',
                    name : 'Hoa lá 2'
                },
                {
                    img : 'mn29-min.jpg',
                    name : 'Hoa lá 2'
                },
                {
                    img : 'mn30-min.jpg',
                    name : 'Hoa lá 2'
                },
                {
                    img : 'mn31-min.jpg',
                    name : 'Hoa lá 2'
                },
                {
                    img : 'mn32-min.jpg',
                    name : 'Hoa lá 2'
                },
                {
                    img : 'mn33-min.jpg',
                    name : 'Hoa lá 2'
                },
                {
                    img : 'mn34-min.jpg',
                    name : 'Hoa lá 2'
                }
        
            ],
            price : 200000,
            unit : 'm2'
        },
        {
            id : 36,
            cate_id : 6,
            name : 'Hoa lá 3',
            slug : 'hoa-la-3',
            product_code : 'hoala3',
            img : 'mn35-min.jpg',
            type : [
                {
                    img : 'mn35-min.jpg',
                    name : 'Hoa lá 3'
                },
                {
                    img : 'mn36-min.jpg',
                    name : 'Hoa lá 3'
                },
                {
                    img : 'mn37-min.jpg',
                    name : 'Hoa lá 3'
                },
                {
                    img : 'mn38-min.jpg',
                    name : 'Hoa lá 3'
                }
            ],
            price : 200000,
            unit : 'm2'
        },
        {
            id : 37,
            cate_id : 6,
            name : 'Hoa lá 4',
            slug : 'hoa-la-4',
            product_code : 'hoala4',
            img : 'mn39-min.jpg',
            type : [
                {
                    img : 'mn39-min.jpg',
                    name : 'Hoa lá 4'
                },
                {
                    img : 'mn40-min.jpg',
                    name : 'Hoa lá 4'
                },
                {
                    img : 'mn41-min.jpg',
                    name : 'Hoa lá 4'
                },
                {
                    img : 'mn42-min.jpg',
                    name : 'Hoa lá 4'
                }
            ],
            price : 200000,
            unit : 'm2'
        },
        {
            id : 39,
            cate_id : 6,
            name : 'Hoa lá 5',
            slug : 'hoa-la-5',
            product_code : 'hoala5',
            img : 'mn47-min.jpg',
            type : [
                {
                    img : 'mn47-min.jpg',
                    name : 'Hoa lá 5'
                },
                {
                    img : 'mn48-min.jpg',
                    name : 'Hoa lá 5'
                },
                {
                    img : 'mn49-min.jpg',
                    name : 'Hoa lá 5'
                }
            ],
            price : 200000,
            unit : 'm2'
        },
        {
            id : 1,
            cate_id : 1,
            name : 'Giấy dán tường lv 2022',
            slug : 'giay-dan-tuong-vcc-2022',
            product_code : 'vcc2022',
            img : 'albany.jpg',
            description : '- Giấy dán tường Hàn Quốc\n- Chất liệu bền, chống thấm, ẩm mốc \n- Bảo hành trọn đời',
            type : [
                {
                    img : 'albany.jpg',
                    name : 'Màu đỏ'
                },
                {
                    img : 'albany2.jpg',
                    name : 'Màu xám'
                },
                {
                    img : 'albany3.jpg',
                    name : 'Màu xanh'
                },
                {
                    img : 'albany4.jpg',
                    name : 'Màu xám 2'
                },
                {
                    img : 'albany5.jpg',
                    name : 'Trẻ em'
                },
                {
                    img : 'albany6.jpg',
                    name : 'Trẻ em 2'
                },
                {
                    img : 'albany7.jpg',
                    name : 'Trẻ em 3'
                },
            ],
            price : 200000,
            unit : 'm2'
    },
    {
        id : 12,
        cate_id : 5,
        name : 'Tranh mã đáo thành công',
        slug : 'tranh-ma-dao-thanh-cong',
        product_code : 'madaothanhcong',
        img : 'mdtc.jpg',
        type : [
            {
                img : 'mdtc.jpg',
                name : 'Tranh MD092'
            },
            {
                img : 'mdtc2.jpg',
                name : 'Tranh MD093'
            },
            {
                img : 'mdtc3.jpg',
                name : 'Tranh MD091'
            },
            {
                img : 'mdtc4.jpg',
                name : 'Tranh MD088'
            },
            {
                img : 'mdtc5.jpg',
                name : 'Tranh MD083'
            },
            {
                img : 'mdtc6.jpg',
                name : 'Tranh MD084'
            },
            {
                img : 'mdtc7.jpg',
                name : 'Tranh MD078'
            },
            {
                img : 'mdtc8.jpg',
                name : 'Tranh MD080'
            },
            {
                img : 'mdtc9.jpg',
                name : 'Tranh MD074'
            },
            {
                img : 'mdtc10.jpg',
                name : 'Tranh MD076'
            },
            {
                img : 'mdtc11.jpg',
                name : 'Tranh MD073'
            },
            {
                img : 'mdtc12.jpg',
                name : 'Tranh MD023'
            },
            {
                img : 'mdtc13.jpg',
                name : 'Tranh MD024'
            },
            {
                img : 'mdtc14.jpg',
                name : 'Tranh MD021'
            },
            {
                img : 'mdtc15.jpg',
                name : 'Tranh MD015'
            },
            {
                img : 'mdtc16.jpg',
                name : 'Tranh  MD05'
            },
            {
                img : 'mdtc17.jpg',
                name : 'Tranh MD011'
            },
    
        ],
        price : 200000,
        unit : 'tấm'
    },
   

{
    id : 11,
    cate_id : 5,
    name : 'Tranh 3d động vật',
    slug : 'tranh-3d-dong-vat',
    product_code : '3ddongvat',
    img : '3ddv.jpg',
    type : [
        {
            img : '3ddv.jpg',
            name : 'Tranh 3DW025'
        },
        {
            img : '3ddv2.jpg',
            name : 'Tranh 3DW029'
        },
        {
            img : '3ddv3.jpg',
            name : 'Tranh 3DW028'
        },
        {
            img : '3ddv4.jpg',
            name : 'Tranh 3DW026'
        },
        {
            img : '3ddv5.jpg',
            name : 'Tranh 3DW021'
        },
        {
            img : '3ddv6.jpg',
            name : 'Tranh 3DW02'
        },
        {
            img : '3ddv7.jpg',
            name : 'Tranh 3DW04'
        },
        {
            img : '3ddv8.jpg',
            name : 'Tranh 3DW05'
        },
        {
            img : '3ddv9.jpg',
            name : 'Tranh 3DW01'
        },
        {
            img : '3ddv10.jpg',
            name : 'Tranh 3DW07'
        },
        {
            img : '3ddv11.jpg',
            name : 'Tranh 3DW09'
        },
        {
            img : '3ddv12.jpg',
            name : 'Tranh 3DW015'
        },
    ],
    price : 200000,
    unit : 'tấm'
},
{
    id : 4,
    cate_id : 2,
    name : 'Giấy dán tường Alisha 2019',
    slug : 'giay-dan-tuong-alisha-2019',
    product_code : 'alisha2019',
    img : 'alisha.jpg',
    type : [
        {
            img : 'alisha.jpg',
            name : 'Alisha 3940-3'
        },
        {
            img : 'als2.jpg',
            name : 'Alisha 3941-1'
        },
        {
            img : 'als3.jpg',
            name : 'Alisha 3941-2'
        },
        {
            img : 'als4.jpg',
            name : 'Alisha 3942-1'
        },
        {
            img : 'als5.jpg',
            name : 'Alisha 3942-3'
        },
        {
            img : 'als6.jpg',
            name : 'Alisha 3940-1'
        },
        {
            img : 'als7.jpg',
            name : 'Alisha 3940-2'
        },
        {
            img : 'als8.jpg',
            name : 'Alisha 3936-2'
        },
        {
            img : 'als9.jpg',
            name : 'Alisha 3934-3'
        },
        {
            img : 'als10.jpg',
            name : 'Alisha 3934-1'
        },
        {
            img : 'als11.jpg',
            name : 'Alisha 3927-4'
        },

    ],
    price : 200000,
    unit : 'm2'
},
{
    id : 5,
    cate_id : 2,
    name : 'Giấy dán tường Pista 2019',
    slug : 'giay-dan-tuong-pista-2019',
    product_code : 'pista2019',
    img : 'pt.jpg',
    type : [
        {
            img : 'pt.jpg',
            name : 'Pista 85013-2'
        },
        {
            img : 'pt1.jpg',
            name : 'Pista 85013-4'
        },
        // {
        //     img : 'pt2.jpg',
        //     name : 'Alisha 3941-1'
        // },
        {
            img : 'pt3.jpg',
            name : 'Pista 85013-3'
        },
        {
            img : 'pt4.jpg',
            name : 'Pista 85014-4'
        },
        {
            img : 'pt5.jpg',
            name : 'Pista 85013-2'
        },
        {
            img : 'pt6.jpg',
            name : 'Pista 85010-2'
        },
        {
            img : 'pt7.jpg',
            name : 'Pista 85009-4'
        },
        {
            img : 'pt8.jpg',
            name : 'Pista 85009-1'
        },
        {
            img : 'pt9.jpg',
            name : 'Pista 85007-3'
        },
        {
            img : 'pt10.jpg',
            name : 'Pista 85007-2'
        },
        {
            img : 'pt11.jpg',
            name : 'Pista 85005-4'
        },

    ],
    price : 200000,
    unit : 'm2'
},

{
    id : 10,
    cate_id : 4,
    name : 'Giấy dán tường natural',
    slug : 'giay-dan-tuong-natural',
    product_code : 'natural',
    img : 'nat.jpg',
    type : [
        {
            img : 'nat.jpg',
            name : 'Natural 87029-1'
        },
        {
            img : 'nat2.jpg',
            name : 'Natural 87028-2'
        },
        {
            img : 'nat3.jpg',
            name : 'Natural 87030-2'
        },
        {
            img : 'nat4.jpg',
            name : 'Natural 87033-1'
        },
        {
            img : 'nat5.jpg',
            name : 'Natural 87033-3'
        },
        {
            img : 'nat6.jpg',
            name : 'Natural 87033-4'
        },
        {
            img : 'nat7.jpg',
            name : 'Natural 87035-3'
        },
        {
            img : 'nat8.jpg',
            name : 'Natural 87038-2'
        },
        {
            img : 'nat9.jpg',
            name : 'Natural 87038-1'
        },
        {
            img : 'nat10.jpg',
            name : 'Natural 87036-1'
        },
        {
            img : 'nat11.jpg',
            name : 'Natural 87022-3'
        },
        {
            img : 'nat12.jpg',
            name : 'Natural 87020-2'
        },
        {
            img : 'nat13.jpg',
            name : 'Natural 87012-3'
        },
        {
            img : 'nat14.jpg',
            name : 'Natural 87004-2'
        },
       
    ],
    price : 200000,
    unit : 'm2'
},
{
    id : 14,
    cate_id : 5,
    name : 'Tranh Art Pix',
    slug : 'tranh-art-pix',
    product_code : 'art',
    img : 'art.jpg',
    type : [
        {
            img : 'art.jpg',
            name : 'Tranh r-086'
        },
        {
            img : 'art2.jpg',
            name : 'Tranh r-087'
        },
        {
            img : 'art3.jpg',
            name : 'Tranh r-088'
        },
        {
            img : 'art4.jpg',
            name : 'Tranh r-082'
        },
        {
            img : 'art5.jpg',
            name : 'Tranh r-075'
        },
        {
            img : 'art6.jpg',
            name : 'Tranh r-074'
        },
        {
            img : 'art7.jpg',
            name : 'Tranh r-061'
        },
        {
            img : 'art8.jpg',
            name : 'Tranh r-058'
        },
        {
            img : 'art9.jpg',
            name : 'Tranh r-055'
        },
        {
            img : 'art10.jpg',
            name : 'Tranh r-054'
        },
        {
            img : 'art11.jpg',
            name : 'Tranh r-050'
        },
        {
            img : 'art12.jpg',
            name : 'Tranh r-051'
        },
        {
            img : 'art13.jpg',
            name : 'Tranh m-045'
        },
        {
            img : 'art14.jpg',
            name : 'Tranh m-083'
        },
        {
            img : 'art15.jpg',
            name : 'Tranh m-044'
        },
        {
            img : 'art16.jpg',
            name : 'Tranh m-030'
        },
        {
            img : 'art17.jpg',
            name : 'Tranh m-034'
        },

    ],
    price : 200000,
    unit : 'tấm'
},

{
    id : 7,
    cate_id : 2,
    name : 'Giấy dán tường Annie 2017',
    slug : 'giay-dan-tuong-annie-2017',
    product_code : 'annie2017',
    img : 'an.jpg',
    type : [
        {
            img : 'an.jpg',
            name : 'Annie 7941-1'
        },
        {
            img : 'an2.jpg',
            name : 'Annie 7940-1'
        },
        {
            img : 'an3.jpg',
            name : 'Annie 7939-1'
        },
        {
            img : 'an4.jpg',
            name : 'Annie 7938-1'
        },
        {
            img : 'an5.jpg',
            name : 'Annie 7936-3'
        },
        {
            img : 'an6.jpg',
            name : 'Annie 7936-1'
        },
        {
            img : 'an7.jpg',
            name : 'Annie 7935-2'
        },
        {
            img : 'an8.jpg',
            name : 'Annie 7935-1'
        },
        {
            img : 'an9.jpg',
            name : 'Annie 7931-2'
        },
        {
            img : 'an10.jpg',
            name : 'Annie 7928-1'
        },
        {
            img : 'an11.jpg',
            name : 'Annie 7927-3'
        },
        {
            img : 'an12.jpg',
            name : 'Annie 7925-2'
        },
        {
            img : 'an13.jpg',
            name : 'Annie 7925-1'
        },
        {
            img : 'an14.jpg',
            name : 'Annie 7922-1'
        },
        {
            img : 'an15.jpg',
            name : 'Annie 7921-1'
        },
        {
            img : 'an16.jpg',
            name : 'Annie 7919-3'
        },

        {
            img : 'an17.jpg',
            name : 'Annie 7915-2'
        },
        {
            img : 'an18.jpg',
            name : 'Annie 7908-3'
        },

    ],
    price : 200000,
    unit : 'm2'
},
{
    id : 3,
    cate_id : 1,
    name : 'Giấy dán tường J100 2021',
    slug : 'giay-dan-tuong-j100-2021',
    product_code : 'j1002021',
    img : 'j100.jpg',
    type : [
        {
            img : 'j100.jpg',
            name : 'In tranh'
        },
        {
            img : 'j1001.jpg',
            name : 'Ô vuông xanh'
        },
        {
            img : 'j1002.jpg',
            name : 'Ô vuông cam'
        },
        {
            img : 'j1003.jpg',
            name : 'Ô vuong trắng'
        },
        {
            img : 'j1004.jpg',
            name : 'Xám xanh'
        },
        {
            img : 'j1005.jpg',
            name : 'Xám xanh 2'
        },
        {
            img : 'j1006.jpg',
            name : 'Vân bố'
        },
        {
            img : 'j1007.jpg',
            name : 'Màu xám xanh 9427-5'
        },
        {
            img : 'j1008.jpg',
            name : 'Màu cam 9426-8'
        },
        {
            img : 'j1009.jpg',
            name : 'Màu cam 9426-7'
        },
        {
            img : 'j10010.jpg',
            name : 'Màu đỏ 9426-10'
        },
        {
            img : 'j10011.jpg',
            name : 'Màu xanh 9424-6'
        },
        {
            img : 'j10012.jpg',
            name : 'Lập thể 9423-3'
        },
        {
            img : 'j10013.jpg',
            name : 'Lập thể 9423-2'
        },
        {

            img : 'j10014.jpg',
            name : '3d thành phố 9420-2'
        },
      
    ],
    price : 200000,
    unit : 'm2'
},
{
    id : 6,
    cate_id : 2,
    name : 'Giấy dán tường Brandnew',
    slug : 'giay-dan-tuong-brandnew',
    product_code : 'brandnew',
    img : 'br.jpg',
    type : [
        {
            img : 'br.jpg',
            name : 'Brandnew 8615-4'
        },
        {
            img : 'br2.jpg',
            name : 'Brandnew 8615-1'
        },
        {
            img : 'br3.jpg',
            name : 'Brandnew 8612-4'
        },
        {
            img : 'br4.jpg',
            name : 'Brandnew 8611-4'
        },
        {
            img : 'br5.jpg',
            name : 'Brandnew 8611-2'
        },
        {
            img : 'br6.jpg',
            name : 'Brandnew 8609-3'
        },
        {
            img : 'br7.jpg',
            name : 'Brandnew 8608-3'
        },
        {
            img : 'br8.jpg',
            name : 'Brandnew 8607-3'
        },
        {
            img : 'br9.jpg',
            name : 'Brandnew 8607-1'
        },
        {
            img : 'br10.jpg',
            name : 'Brandnew 8605-2'
        },
        {
            img : 'br11.jpg',
            name : 'Brandnew 8602-2'
        },

    ],
    price : 200000,
    unit : 'm2'
},
{
    id : 8,
    cate_id : 3,
    name : 'Giấy dán tường dream world 2022',
    slug : 'giay-dan-tuong-dream-world-2022',
    product_code : 'dreamworld2022',
    img : 'dr.jpg',
    type : [
        {
            img : 'dr.jpg',
            name : 'Giấy dán tường 5150-1'
        },
        {
            img : 'dr2.jpg',
            name : 'Giấy dán tường 5149-1'
        },
        {
            img : 'dr3.jpg',
            name : 'Giấy dán tường 5146-2'
        },
        {
            img : 'dr4.jpg',
            name : 'Giấy dán tường 5145-2'
        },
        {
            img : 'dr5.jpg',
            name : 'Giấy dán tường hình trái tim 5143-1'
        },
        {
            img : 'dr6.jpg',
            name : 'Giấy dán tường bản đồ 5138-1'
        },
        {
            img : 'dr7.jpg',
            name : 'Giấy dán tường 5137-2'
        },
        {
            img : 'dr8.jpg',
            name : 'Giấy dán tường 5135-2'
        },
        {
            img : 'dr9.jpg',
            name : 'Giấy dán tường 5131-2'
        },
        {
            img : 'dr10.jpg',
            name : 'Giấy dán tường 5129-1'
        },
        {
            img : 'dr11.jpg',
            name : 'Giấy dán tường 5126-1'
        },
    ],
    price : 200000,
    unit : 'm2'
},
{
    id : 15,
    cate_id : 5,
    name : 'Tranh Luna',
    slug : 'tranh-luna',
    product_code : 'luna',
    img : 'ln.jpg',
    type : [
        {
            img : 'ln.jpg',
            name : 'Tranh ny-003'
        },
        {
            img : 'ln2.jpg',
            name : 'Tranh pre-037'
        },
        {
            img : 'ln3.jpg',
            name : 'Tranh pre-042'
        },
        {
            img : 'ln4.jpg',
            name : 'Tranh pre-027'
        },
        {
            img : 'ln5.jpg',
            name : 'Tranh pre-029'
        },
        {
            img : 'ln6.jpg',
            name : 'Tranh pre-008'
        },
        {
            img : 'ln7.jpg',
            name : 'Tranh os-015'
        },
        {
            img : 'ln8.jpg',
            name : 'Tranh os-004'
        },
        {
            img : 'ln9.jpg',
            name : 'Tranh apk-106'
        },
        {
            img : 'ln10.jpg',
            name : 'Tranh ny-005'
        },
        {
            img : 'ln11.jpg',
            name : 'Tranh apk-102'
        },
        {
            img : 'ln12.jpg',
            name : 'Tranh apk-090'
        },
        {
            img : 'ln13.jpg',
            name : 'Tranh apj-044'
        },
        {
            img : 'ln14.jpg',
            name : 'Tranh apj-015'
        },
        {
            img : 'ln15.jpg',
            name : 'Tranh ape-006'
        },
        {
            img : 'ln16.jpg',
            name : 'Tranh apj-046'
        },
        {
            img : 'ln17.jpg',
            name : 'Tranh apk-047'
        },

    ],
    price : 200000,
    unit : 'tấm'
},
{
    id : 20,
    cate_id : 1,
    name : 'Giấy dán tường Cassia',
    slug : 'giay-dan-tuong-cassia',
    product_code : 'cassia',
    img : 'csa.jpg',
    type : [
        {
            img : 'csa.jpg',
            name : 'cassia 70236-2'
        },
        {
            img : 'csa2.jpg',
            name : 'cassia c9643-11'
        },
        {
            img : 'csa3.jpg',
            name : 'cassia 70236-1'
        },
        {
            img : 'csa4.jpg',
            name : 'cassia 70233-5'
        },
        {
            img : 'csa5.jpg',
            name : 'cassia 70234-1'
        },
        {
            img : 'csa6.jpg',
            name : 'cassia 70235-2'
        },
        {
            img : 'csa7.jpg',
            name : 'cassia 7920-3'
        },
        {
            img : 'csa8.jpg',
            name : 'cassia 7920-1'
        },
        {
            img : 'csa9.jpg',
            name : 'cassia 7919-4'
        },
        {
            img : 'csa10.jpg',
            name : 'cassia 7919-3'
        },
        {
            img : 'csa11.jpg',
            name : 'cassia 7918-5'
        },
        {
            img : 'csa12.jpg',
            name : 'cassia 7918-2'
        },
        {
            img : 'csa13.png',
            name : 'cassia 7917-6'
        },
        {
            img : 'csa14.jpg',
            name : 'cassia 7916-5'
        },
        {
            img : 'csa15.jpg',
            name : 'cassia 7915-8'
        },
        {
            img : 'csa16.jpg',
            name : 'cassia 7915-6'
        },
        {
            img : 'csa17.jpg',
            name : 'cassia 7915-3'
        }
    ],
    price : 200000,
    unit : 'm2'
},
{
    id : 9,
    cate_id : 3,
    name : 'Giấy dán tường dream world 2018',
    slug : 'giay-dan-tuong-dream-world-2018',
    product_code : 'dreamworld2018',
    img : 'dr18.jpg',
    type : [
        {
            img : 'dr18.jpg',
            name : 'Dream world A515-1'
        },
        {
            img : 'dr182.jpg',
            name : 'Dream world D5113-1'
        },
        {
            img : 'dr183.jpg',
            name : 'Dream world D5106-1'
        },
        {
            img : 'dr184.jpg',
            name : 'Dream world A515-1'
        },
        {
            img : 'dr185.jpg',
            name : 'Dream world A5100-1'
        },
        {
            img : 'dr186.jpg',
            name : 'Dream world D5070-1'
        },
        {
            img : 'dr187.jpg',
            name : 'Dream world D5043-1'
        },
        {
            img : 'dr188.jpg',
            name : 'Dream world D5019-1'
        },
        {
            img : 'dr189.jpg',
            name : 'Dream world A5120-3'
        },
        {
            img : 'dr1810.jpg',
            name : 'Dream world A5119-2'
        },
        {
            img : 'dr1811.jpg',
            name : 'Dream world A5118-2'
        },
    ],
    price : 200000,
    unit : 'm2'
},
{
    id : 18,
    cate_id : 1,
    name : 'Giấy dán tường V-Concept',
    slug : 'giay-dan-tuong-v-concept',
    product_code : 'vconcept',
    img : 'vcc.jpg',
    type : [
        {
            img : 'vcc.jpg',
            name : 'c-concept 7924-1'
        },
        {
            img : 'vcc2.jpg',
            name : 'VCONCEPT 7925-1'
        },
        {
            img : 'vcc3.jpg',
            name : 'VCONCEPT 7923-1'
        },
        {
            img : 'vcc4.jpg',
            name : 'VCONCEPT 7922-4'
        },
        {
            img : 'vcc5.jpg',
            name : 'VCONCEPT 7922-1'
        },
        {
            img : 'vcc6.jpg',
            name : 'VCONCEPT 7921-3'
        },
        {
            img : 'vcc7.jpg',
            name : 'VCONCEPT 7920-3'
        },
        {
            img : 'vcc8.jpg',
            name : 'VCONCEPT 7920-1'
        },
        {
            img : 'vcc9.jpg',
            name : 'VCONCEPT 7919-4'
        },
        {
            img : 'vcc10.jpg',
            name : 'VCONCEPT 7919-3'
        },
        {
            img : 'vcc11.jpg',
            name : 'VCONCEPT 7918-5'
        },
        {
            img : 'vcc12.jpg',
            name : 'VCONCEPT 7918-2'
        },
        {
            img : 'vcc13.jpg',
            name : 'VCONCEPT 7917-6'
        },
        {
            img : 'vcc14.jpg',
            name : 'VCONCEPT 7916-5'
        },
        {
            img : 'vcc15.jpg',
            name : 'VCONCEPT 7915-8'
        },
        {
            img : 'vcc16.jpg',
            name : 'VCONCEPT 7915-6'
        },
        {
            img : 'vcc17.jpg',
            name : 'VCONCEPT 7915-3'
        },
        {
            img : 'vcc18.jpg',
            name : 'VCONCEPT 7912-4'
        },
        {
            img : 'vcc19.jpg',
            name : 'VCONCEPT 7909-7'
        },


    ],
    price : 200000,
    unit : 'm2'
},
{
    id : 2,
    cate_id : 1,
    name : 'Giấy dán tường Soho 2021',
    slug : 'giay-dan-tuong-soho-2021',
    product_code : 'soho2021',
    img : 'soho.jpg',
    type : [
        {
            img : 'soho.jpg',
            name : 'Màu trắng'
        },
        {
            img : 'soho2.jpg',
            name : 'Xanh đậm'
        },
        {
            img : 'soho3.jpg',
            name : 'Trơn xanh'
        },
        {
            img : 'soho4.jpg',
            name : 'Xám xanh'
        },
        {
            img : 'soho5.jpg',
            name : 'Trắng xanh'
        },
        {
            img : 'soho6.jpg',
            name : 'Màu xám'
        },
        {
            img : 'soho7.jpg',
            name : 'Màu cam đậm'
        },
        {
            img : 'soho8.jpg',
            name : 'Màu cam'
        },
        {
            img : 'soho9.jpg',
            name : 'Màu vàng'
        },
        {
            img : 'soho10.jpg',
            name : 'Màu xanh'
        },
        {
            img : 'soho11.jpg',
            name : 'Hoa lá'
        },
        {
            img : 'soho12.jpg',
            name : 'Giả đá hoa cương'
        },
        {
            img : 'soho13.jpg',
            name : 'Hoa văn'
        },

       
    ],
    price : 200000,
    unit : 'm2'
},
{
    id : 13,
    cate_id : 5,
    name : 'Tranh sơn thủy',
    slug : 'tranh-son-thuy',
    product_code : 'sonthuy',
    img : 'st.jpg',
    type : [
        {
            img : 'st.jpg',
            name : 'Tranh ST083'
        },
        {
            img : 'st2.jpg',
            name : 'Tranh ST082'
        },
        {
            img : 'st3.jpg',
            name : 'Tranh  ST081'
        },
        {
            img : 'st4.jpg',
            name : 'Tranh ST075'
        },
        {
            img : 'st5.jpg',
            name : 'Tranh ST072'
        },
        {
            img : 'st6.jpg',
            name : 'Tranh ST069'
        },
        {
            img : 'st7.jpg',
            name : 'Tranh ST071'
        },
        {
            img : 'st8.jpg',
            name : 'Tranh ST065'
        },
        {
            img : 'st9.jpg',
            name : 'Tranh ST061'
        },
        {
            img : 'st10.jpg',
            name : 'Tranh ST058'
        },
        {
            img : 'st11.jpg',
            name : 'Tranh ST056'
        },
        {
            img : 'st12.jpg',
            name : 'Tranh ST053'
        },
        {
            img : 'st13.jpg',
            name : 'Tranh ST050'
        },
        {
            img : 'st14.jpg',
            name : 'Tranh ST039'
        },
        {
            img : 'st15.jpg',
            name : 'Tranh ST033'
        },
        {
            img : 'st16.jpg',
            name : 'Tranh ST018'
        },
        {
            img : 'st17.jpg',
            name : 'Tranh ST08'
        },

    ],
    price : 200000,
    unit : 'tấm'
},
{
    id : 19,
    cate_id : 1,
    name : 'Giấy dán tường Living 2020',
    slug : 'giay-dan-tuong-living-2020',
    product_code : 'living2020',
    img : 'lv.jpg',
    type : [
        {
            img : 'lv.jpg',
            name : 'living 70236-2'
        },
        {
            img : 'lv2.jpg',
            name : 'living c9643-11'
        },
        {
            img : 'lv3.jpg',
            name : 'living 70236-1'
        },
        {
            img : 'lv4.jpg',
            name : 'living 70233-5'
        },
        {
            img : 'lv5.jpg',
            name : 'living 70234-1'
        },
        {
            img : 'lv6.jpg',
            name : 'living 70235-2'
        },
        {
            img : 'lv7.jpg',
            name : 'living 7920-3'
        },
        {
            img : 'lv8.jpg',
            name : 'living 7920-1'
        },
        {
            img : 'lv9.jpg',
            name : 'living 7919-4'
        },
        {
            img : 'lv10.jpg',
            name : 'living 7919-3'
        },
        {
            img : 'lv11.jpg',
            name : 'living 7918-5'
        },
        {
            img : 'lv12.jpg',
            name : 'living 7918-2'
        },
        {
            img : 'lv13.jpg',
            name : 'living 7917-6'
        },
        {
            img : 'lv14.jpg',
            name : 'living 7916-5'
        },
        {
            img : 'lv15.jpg',
            name : 'living 7915-8'
        },
        {
            img : 'lv16.jpg',
            name : 'living 7915-6'
        },
        {
            img : 'lv17.jpg',
            name : 'living 7915-3'
        },
        {
            img : 'lv18.jpg',
            name : 'living 7912-4'
        },
        {
            img : 'lv19.jpg',
            name : 'living 7909-7'
        },
        {
            img : 'lv20.jpg',
            name : 'living 7909-20'
        },
        {
            img : 'lv21.jpg',
            name : 'living 7909-21'
        },
        {
            img : 'lv22.jpg',
            name : 'living 7909-22'
        },
        {
            img : 'lv23.jpg',
            name : 'living 7909-23'
        },
        {
            img : 'lv24.jpg',
            name : 'living 7909-24'
        },
       


    ],
    price : 200000,
    unit : 'm2'
},
{
    id : 16,
    cate_id : 5,
    name : 'Tranh Ngọc Bích',
    slug : 'tranh-ngoc-bich',
    product_code : 'ngocbich',
    img : 'nb.jpg',
    type : [
        {
            img : 'nb.jpg',
            name : 'Tranh 3DC125'
        },
        {
            img : 'nb2.jpg',
            name : 'Tranh 3DC124'
        },
        {
            img : 'nb3.jpg',
            name : 'Tranh 3DC126'
        },
        {
            img : 'nb4.jpg',
            name : 'Tranh 3DC104'
        },
        {
            img : 'nb5.jpg',
            name : 'Tranh 3DC117'
        },
        {
            img : 'nb6.jpg',
            name : 'Tranh 3DC118'
        },
        {
            img : 'nb7.jpg',
            name : 'Tranh 3DC99'
        },
        {
            img : 'nb8.jpg',
            name : 'Tranh 3DC101'
        },
        {
            img : 'nb9.jpg',
            name : 'Tranh 3DC102'
        },
        {
            img : 'nb10.jpg',
            name : 'Tranh 3DC97'
        },
        {
            img : 'nb11.jpg',
            name : 'Tranh 3DC94'
        },
        {
            img : 'nb12.jpg',
            name : 'Tranh 3DC72'
        },
        {
            img : 'nb13.jpg',
            name : 'Tranh 3DC71'
        },
        {
            img : 'nb14.jpg',
            name : 'Tranh 3DC68'
        },
        {
            img : 'nb15.jpg',
            name : 'Tranh 3DC65'
        },
        {
            img : 'nb16.jpg',
            name : 'Tranh 3DC64'
        },
        {
            img : 'nb17.jpg',
            name : 'Tranh 3DC43'
        },
        {
            img : 'nb18.jpg',
            name : 'Tranh 3DC60'
        },
        {
            img : 'nb19.jpg',
            name : 'Tranh 3DC50'
        },

    ],
    price : 200000,
    unit : 'tấm'
},
{
    id : 17,
    cate_id : 5,
    name : 'Tranh phong cảnh',
    slug : 'tranh-phong-canh',
    product_code : 'phongcanh',
    img : 'pc.jpg',
    type : [
        {
            img : 'pc.jpg',
            name : 'Tranh LN096'
        },
        {
            img : 'pc2.jpg',
            name : 'Tranh LN095'
        },
        {
            img : 'pc3.jpg',
            name : 'Tranh LN094'
        },
        {
            img : 'pc4.jpg',
            name : 'Tranh LN093'
        },
        {
            img : 'pc5.jpg',
            name : 'Tranh LN091'
        },
        {
            img : 'pc6.jpg',
            name : 'Tranh LN090'
        },
        {
            img : 'pc7.jpg',
            name : 'Tranh LN089'
        },
        {
            img : 'pc8.jpg',
            name : 'Tranh LN088'
        },
        {
            img : 'pc9.jpg',
            name : 'Tranh LN087'
        },
        {
            img : 'pc10.jpg',
            name : 'Tranh LN086'
        },
        {
            img : 'pc11.jpg',
            name : 'Tranh LN085'
        },
        {
            img : 'pc12.jpg',
            name : 'Tranh LN084'
        },
        {
            img : 'pc13.jpg',
            name : 'Tranh LN081'
        },
        {
            img : 'pc14.jpg',
            name : 'Tranh LN079'
        },
        {
            img : 'pc15.jpg',
            name : 'Tranh LN078'
        },
        {
            img : 'pc16.jpg',
            name : 'Tranh LN077'
        },
        {
            img : 'pc17.jpg',
            name : 'Tranh LN075'
        },
        {
            img : 'pc18.jpg',
            name : 'Tranh LN070'
        },
        {
            img : 'pc19.jpg',
            name : 'Tranh LN068'
        },
        {
            img : 'pc20.jpg',
            name : 'Tranh LN067'
        },
        {
            img : 'pc21.jpg',
            name : 'Tranh LN058'
        },
        {
            img : 'pc22.jpg',
            name : 'Tranh LN056'
        },
        {
            img : 'pc23.jpg',
            name : 'Tranh LN055'
        },
        {
            img : 'pc24.jpg',
            name : 'Tranh LN044'
        },
        {
            img : 'pc25.jpg',
            name : 'Tranh LN015'
        },

    ],
    price : 200000,
    unit : 'tấm'
},
],
    hotProducts : [],
    getNumberProductCart : 0,
    cateProducts : [],
    cateTitle : '',
    carts : [],
    editProduct : {},
    constructions : [
        {
            title : 'Hoàn thiện căn Trại Mát 🌲🌲',
            month : '4',
            year : '2023',
            date : '5',
            imgs : ['ct3-min.jpg','ct2-min.jpg','ct1-min.jpg','ct4-min.jpg','ct5-min.jpg','ct6-min.jpg','ct7-min.jpg','ct8-min.jpg'],
            content : 'Hoàn thiện căn Trại Mát 🌲🌲'

        },
        {
            title : 'Hoàn thiện tranh dán tường căng villa Khe Sanh ❤️❤️😘🍻',
            month : '4',
            year : '2023',
            date : '4',
            imgs : ['ct18-min.jpg','ct10-min.jpg','ct11-min.jpg','ct12-min.jpg','ct13-min.jpg','ct15-min.jpg','ct16-min.jpg','ct17-min.jpg','ct9-min.jpg'],
            content : 'Hoàn thiện tranh dán tường căng villa Khe Sanh ❤️❤️😘🍻'

        },
        {
            title : 'Quá xinh lung linh luôn nè Bé ơi 🧚‍♂️🧚🧚‍♂️🧚‍♂️🧚‍♂️',
            month : '11',
            year : '2022',
            date : '18',
            imgs : ['ct21-min.jpg','ct20-min.jpg','ct19-min.jpg','ct22-min.jpg','ct23-min.jpg','ct24-min.jpg'],
            content : 'Quá xinh lung linh luôn nè Bé ơi 🧚‍♂️🧚🧚‍♂️🧚‍♂️🧚‍♂️'

        },
        {
            title : 'Với Vhome trang trí những bức tường lớn hơn 100m2  luôn là một trãi nghiêm tuyệt vời 💪💪💪💪🤪🤪',
            month : '11',
            year : '2022',
            date : '13',
            imgs : ['ct25-min.jpg','ct26-min.jpg','ct27-min.jpg','ct28-min.jpg','ct29-min.jpg','ct30-min.jpg','ct31-min.jpg'],
            content : 'Với Vhome trang trí những bức tường lớn hơn 100m2  luôn là một trãi nghiêm tuyệt vời 💪💪💪💪🤪🤪'

        },
        {
            title : 'Một chiếc phòng cho bé thật ngộ ngĩnh và dễ thương nè 🦹🤪😜🤪😜',
            month : '11',
            year : '2022',
            date : '1',
            imgs : ['ct32-min.jpg','ct33-min.jpg','ct34-min.jpg','ct35-min.jpg','ct36-min.jpg','ct37-min.jpg'],
            content : 'Một chiếc phòng cho bé thật ngộ ngĩnh và dễ thương nè 🦹🤪😜🤪😜'

        },
        {
            title : 'Thi công hơn 400 mét vuông tranh và giấy dán tường Hàn quốc',
            month : '10',
            year : '2022',
            date : '26',
            imgs : ['ct38-min.jpg','ct39-min.jpg','ct40-min.jpg','ct41-min.jpg','ct42-min.jpg','ct43-min.jpg','ct44-min.jpg','ct45-min.jpg','ct46-min.jpg','ct47-min.jpg','ct48-min.jpg'],
            content : '14 Đống Đa, Amazing Kids 🧚🧚‍♂️🧚‍♀️🦸🦸‍♂️🦹🧜🧜‍♂️🧜‍♀️ Chúc các con vui chơi thoải thích, có một cuộc sống tràn ngập sắc màu và một tương lai tươi sáng nha 😜🤪'

        },
        {
            title : 'Lột xác hoàn toàn 5 phòng Lux homestay Đà lạt trong 2 ngày 😜🤪',
            month : '10',
            year : '2022',
            date : '24',
            imgs : ['ct49-min.jpg','ct50-min.jpg','ct51-min.jpg','ct52-min.jpg','ct53-min.jpg','ct54-min.jpg','ct55-min.jpg','ct56-min.jpg'],
            content : 'Lột xác hoàn toàn 5 phòng Lux homestay Đà lạt trong 2 ngày 😜🤪'

        },
        {
            title : 'Hơn 200m2 giấy dán tường Hàn quốc tại villa An Sơn ❤️😘',
            month : '6',
            year : '2022',
            date : '10',
            imgs : ['ct57-min.jpg','ct58-min.jpg','ct59-min.jpg','ct60-min.jpg','ct61-min.jpg'],
            content : 'Hơn 200m2 giấy dán tường Hàn quốc tại villa An Sơn ❤️😘'

        },
        {
            title : 'Thi công tại Tà Nung, Lâm Đồng 🙈🙈🙈😜',
            month : '5',
            year : '2021',
            date : '18',
            imgs : ['c1.jpg','c12.jpg','c13.jpg','c14.jpg'],
            content : 'Hoàn thiện Trần gỗ nhân tạo, và 100 mét vuông giấy dán tường tại Tà Nung, Lâm Đồng '

        },
        {
            title : '💥 Thi công cỏ nhân tạo, cỏ trang trí , background,  tường xanh ',
            month : '4',
            year : '2021',
            date : '24',
            imgs : ['c23.jpg','c21.jpg','c22.jpg','c2.jpg','c24.jpg','c25.jpg'],
            content : `👉 Bạn muốn thay đổi Bức tường cũ kĩ ở nhà \n👉 Bạn muốn không gian xanh mát ngập tràn trong nhà của bạn`

        },
        {
            title : 'Công trình nổi bật',
            month : '4',
            year : '2021',
            date : '1',
            imgs : ['c3.jpg','c31.jpg','c32.jpg','c33.jpg'],
            content : 'Hoàn thiện thi công 1 căn hộ 413, tại Chung cư Khe Sanh, Đà lạt.. .🙈🇮🇹🇮🇹'

        },
        {
            title : 'Hoàn thiện hơn 50 phòng khách sạn STILLUS BOUTIQUE HOTEL',
            month : '3',
            year : '2021',
            date : '26',
            imgs : ['c4.jpg','c41.jpg','c42.jpg','c43.jpg','c44.jpg'],
            content : 'Hoàn thiện hơn 50 phòng khách sạn STILLUS BOUTIQUE HOTEL - Đà Lạt, tại 107 Triệu Việt Vương, p3, TP Đà lạt 🙈🙈🙈🙈🙈'

        },
        {
            title : 'Bảng demo trước khi thi công 🙈🙈',
            month : '3',
            year : '2021',
            date : '24',
            imgs : ['c5.jpg','c51.jpg','c52.jpg','c53.jpg'],
            content : 'Bảng demo trước khi thi công 🙈🙈'

        },
        {
            title : 'Hoàn thiện 4 tranh treo tại tòa nhà Viettel Lâm Đồng 🙈😜',
            month : '3',
            year : '2021',
            date : '23',
            imgs : ['c6.jpg','c61.jpg','c62.jpg','c63.jpg'],
            content : 'Hoàn thiện 4 tranh treo tại tòa nhà Viettel Lâm Đồng 🙈😜'

        },
        {
            title : '⭕️FULL COLOR GIẤY DÁN - TRANH DÁN TƯỜNG 3D⭕️',
            month : '3',
            year : '2021',
            date : '20',
            imgs : ['c7.png','c71.png','c72.png','c73.png','c74.png','c75.png','c76.png','c77.png'],
            content : '👉 Thi công trọn gói COMBO tường + trần khách sạn, nhà ở, hàng, café, karaoke… sắc nét và sống động.\n🍂 Thi công dễ dàng, nhanh gọn\n🍂 Không còn tình trạng tường - trần ẩ.m m.ốc, r.êu phong\n🍂 Bảo hành 5 năm cho tất cả sản phẩm...'

        },
        {
            title : '🌺🌸💐Những mẫu tranh cho phòng bé,',
            month : '3',
            year : '2021',
            date : '18',
            imgs : ['c8.png','c81.png','c82.png','c83.png','c84.png','c85.png','c86.png','c87.png'],
            content : 'Những mẫu tranh cho phòng bé, có thể trang trí 1 mảng tường hoặc full phòng🏵️💮🌻\nLiên hệ tư vấn: 0911 154 919'

        },
        {
            title : 'Hoàn thiện tranh đầu giường tại 78 đường 3 tháng 2, TP đà lạt😁😁',
            month : '1',
            year : '2021',
            date : '16',
            imgs : ['c9.jpg','c91.jpg','c92.jpg','c93.jpg'],
            content : 'Hoàn thiện tranh đầu giường tại 78 đường 3 tháng 2, TP đà lạt😁😁'

        },
    ], 
    imgs : [],
    showPopup : false,
    productDetail : {},
    constructionsHome : []
}