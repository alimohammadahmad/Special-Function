// Gamma function
function Gamma(x){if(x==0){return 1;}else{if(x<2 && x>0){return x;}else	return x*Gamma(x-1);}}
// Barnoulli Numbers
function BarnoulliNumbers(n){var B=0,j=0,m,s;if(n==0){	return 1;}if(n==1){return 0.5;}var sn ;while(n%2==0 && n>0){
sn =SN(n);m=pow(2,n);s=pow(4,n);B=B+pow(-1,n/2)*Gamma(n)*sn/(m-s);n--;}return n,B;}
//hyperbolic functions & Inverse functions as logarithms
function cosh(x){return (exp(x)+exp(-x))/2;}function sinh(x){	return (exp(x)-exp(-x))/2;}function tanh(x){return sinh(x)/cosh(x);}
function coth(x){if(sinh(x)==0){console.error("error can't divide by 0");}else{return cosh(x)/sinh(x);}}
function asinh(x){return log(x+sqrt(x*x+1));}function acosh(x){	if(x<1){console.error("error the domain is [1,infinty]");}else{return log(x+sqrt(x*x-1));}}
function atanh(x){if(x>1 || x<-1){}else{return log((x+1)/(1-x))/2;}}function acoth(x){	if(x<1 || x>-1){console.error("error the domain [-1,1] undefined");}else{return log((x+1)/(x-1))/2;}
}

