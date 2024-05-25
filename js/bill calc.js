function total(){
					var a,b,c,d,sum,p,tot;
													
					a=document.getElementById("item1").value;
					b=document.getElementById("item2").value;
					c=document.getElementById("item3").value;
					d=document.getElementById("item4").value;							
					sum=Number(a)+ Number(b)+ Number(c)+ Number(d);
					document.getElementById("demo1").value=sum;
							
					if(sum>10000)
					{
						p=Number(sum)*0.80;
						q=Number(sum)*0.20;
						r=Number(sum)*0.05;
					}
					else
					{
						p=Number(sum)*0.90;
						q=Number(sum)*0.10;
						r=Number(sum)*0.05;
					}
							
					tot=Number(p)+ Number(r)+ Number(r);
							
					document.getElementById("demo2").value=p;
					document.getElementById("demo3").value=q;
					document.getElementById("demo4").value=r;
					document.getElementById("demo5").value=r;
					document.getElementById("demo6").value=tot;
							
				}
			