// Gamma function
function Gamma(x){if(x==0){return 1;}else{if(x<2 && x>0){return x;}else	return x*Gamma(x-1);}}
// Barnoulli Numbers
function BarnoulliNumbers(n){var B=0,j=0,m,s;if(n==0){	return 1;}if(n==1){return 0.5;}var sn ;while(n%2==0 && n>0){
sn =SN(n);m=pow(2,n);s=pow(4,n);B=B+pow(-1,n/2)*Gamma(n)*sn/(m-s);n--;}return n,B;}
