#include <iostream>

using namespace std;
String name;

int main(int argc, char const *argv[])
{
    cout << "Hello" << endl;
    cin >> "What is your name? : " + name;
    cout << name;
    cin.get();
    return 0;
}